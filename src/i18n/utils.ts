import { defaultLang, languages, type Lang } from "./ui";

export function getLangFromUrl(url: URL): Lang {
  const [, segment] = url.pathname.split("/");
  return segment === "en" ? "en" : defaultLang;
}

/** Build a locale-aware path. ES lives at root, EN under /en. */
export function localizedPath(lang: Lang, path: string): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  if (lang === defaultLang) return clean;
  return clean === "/" ? "/en" : `/en${clean}`;
}

/** Given a URL path, return the same page in another locale. */
export function switchLangPath(url: URL, lang: Lang): string {
  let path = url.pathname;
  if (path === "/en" || path.startsWith("/en/")) {
    path = path.slice(3) || "/";
  }
  return localizedPath(lang, path);
}

export function langParamToLang(param?: string): Lang {
  return param === "en" ? "en" : defaultLang;
}

export const localeCodes = Object.keys(languages) as Lang[];
