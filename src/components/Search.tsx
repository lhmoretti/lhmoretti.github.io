import { createEffect, createSignal } from "solid-js";
import Fuse from "fuse.js";
import { useTranslations } from "@i18n/ui";
import ArrowCard from "@components/ArrowCard";
import { trackEvent } from "@lib/analytics";

export type CardData = {
  collection: string;
  slug: string;
  data: { title: string; summary: string; tags?: string[] };
};

type Props = {
  data: CardData[];
  lang?: "es" | "en";
};

export default function Search({ data, lang = "es" }: Props) {
  const t = useTranslations(lang);
  const [query, setQuery] = createSignal("");
  const [results, setResults] = createSignal<CardData[]>([]);

  const fuse = new Fuse(data, {
    keys: ["slug", "data.title", "data.summary"],
    includeMatches: true,
    minMatchCharLength: 2,
    threshold: 0.4,
  });

  let searchTimer: ReturnType<typeof setTimeout> | undefined;
  createEffect(() => {
    const q = query();
    if (q.length < 2) {
      setResults([]);
    } else {
      setResults(fuse.search(q).map((result) => result.item));
      clearTimeout(searchTimer);
      searchTimer = setTimeout(() => trackEvent("search", { search_term: q }), 800);
    }
  });

  const onInput = (e: Event) => {
    const target = e.target as HTMLInputElement;
    setQuery(target.value);
  };

  return (
    <div class="flex flex-col">
      <div class="relative">
        <input
          name="search"
          type="text"
          value={query()}
          onInput={onInput}
          autocomplete="off"
          spellcheck={false}
          placeholder={t("search.placeholder")}
          class="w-full px-2.5 py-1.5 pl-10 rounded outline-none text-term-text bg-term-panel border border-term-border focus:border-term-fg"
        />
        <svg class="absolute size-6 left-1.5 top-1/2 -translate-y-1/2 stroke-current">
          <use href={`/ui.svg#search`} />
        </svg>
      </div>
      {query().length >= 2 && results().length >= 1 && (
        <div class="mt-12">
          <div class="text-sm uppercase mb-2">
            {t("search.results", { n: results().length, q: query() })}
          </div>
          <ul class="flex flex-col gap-3">
            {results().map((result) => (
              <li>
                <ArrowCard entry={result} pill={true} lang={lang} source="search" />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
