import type { JSX } from "solid-js/jsx-runtime";
import { cn } from "@lib/utils";
import { trackEvent } from "@lib/analytics";

type Props = {
  entry: {
    collection: string;
    slug: string;
    data: { title: string; summary: string; tags?: string[] };
  };
  pill?: boolean;
  lang?: "es" | "en";
  source?: string;
};

export default function ArrowCard({ entry, pill, lang = "es", source = "card" }: Props): JSX.Element {
  const { collection, slug, data } = entry;
  const tags = data.tags ?? [];
  return (
    <a
      onClick={() => trackEvent("card_click", { collection, slug, source })}
      href={lang === "en" ? `/en/${collection}/${slug}` : `/${collection}/${slug}`}
      class={cn(
        "group block p-4 border border-term-border rounded no-underline",
        "hover:bg-term-panel transition-colors duration-200"
      )}
    >
      <div class="flex items-center justify-between gap-2">
        <span class="text-term-fg font-bold group-hover:underline underline-offset-4">
          ./{slug}
        </span>
        <span class="text-term-dim text-xs">→</span>
      </div>
      <p class="mt-1 text-sm text-term-text/80">{data.summary}</p>
      {!pill && tags.length > 0 && (
        <p class="mt-2 text-xs text-term-dim">{tags.join(" · ")}</p>
      )}
    </a>
  );
}
