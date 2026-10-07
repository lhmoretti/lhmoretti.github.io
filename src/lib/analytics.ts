// Minimal Google Analytics 4 helper.
// gtag is injected in BaseHead.astro only when PUBLIC_GA_MEASUREMENT_ID is set.

declare global {
  interface Window {
    gtag?: (command: string, ...args: any[]) => void;
    dataLayer?: any[];
  }
}

/** Every event automatically includes lang + page context. */
function withContext(params: Record<string, any>) {
  return {
    lang: document.documentElement.lang || "es",
    page: window.location.pathname,
    ...params,
  };
}

export function trackEvent(name: string, params: Record<string, any> = {}) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", name, withContext(params));
  }
}

function domainOf(url: string): string {
  try {
    return new URL(url, window.location.origin).hostname;
  } catch {
    return url;
  }
}

export function trackOutboundClick(url: string, label?: string) {
  const kind = url.startsWith("mailto:")
    ? "email_click"
    : url.startsWith("tel:")
      ? "phone_click"
      : "outbound_click";
  trackEvent(kind, { url, label: label ?? url, domain: domainOf(url) });
}

export function trackScrollDepth() {
  if (typeof window === "undefined") return;
  const fired = new Set<number>();
  window.addEventListener("scroll", () => {
    const h = document.documentElement;
    const pct = Math.round(((window.scrollY + window.innerHeight) / h.scrollHeight) * 100);
    for (const mark of [25, 50, 75, 100]) {
      if (pct >= mark && !fired.has(mark)) {
        fired.add(mark);
        trackEvent("scroll_depth", { percent: mark });
      }
    }
  }, { passive: true });
}

/** Sends how long the user stayed on the page when leaving / hiding the tab. */
export function trackSessionTiming() {
  if (typeof window === "undefined") return;
  const start = Date.now();
  let sent = false;
  const send = () => {
    if (sent) return;
    sent = true;
    const seconds = Math.round((Date.now() - start) / 1000);
    if (seconds > 0) {
      trackEvent("session_timing", { duration_seconds: seconds });
    }
  };
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") send();
  });
  window.addEventListener("pagehide", send);
}

/** Tracks copy events with a small snippet of the copied text. */
export function trackCopy() {
  if (typeof window === "undefined") return;
  document.addEventListener("copy", () => {
    const text = (window.getSelection()?.toString() ?? "").slice(0, 100);
    trackEvent("copy_text", { snippet: text });
  });
}
