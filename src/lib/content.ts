import { getCollection } from "astro:content";
import type { Lang } from "@i18n/ui";

/** Get collection entries for a given locale (folders es/ en/ inside the collection). */
export async function getLocalizedCollection<C extends "projects" | "work" | "courses" | "certifications">(
  collection: C,
  lang: Lang
) {
  const entries = await getCollection(collection as any);
  return (entries as any[]).filter(
    (entry) => entry.slug.split("/")[0] === lang
  );
}

/** Strip the locale prefix from a content entry slug ("es/go-chat" → "go-chat"). */
export function stripLocale(slug: string): string {
  return slug.split("/").slice(1).join("/");
}
