import { createEffect, createSignal, For } from "solid-js"
import ArrowCard from "@components/ArrowCard"
import { cn } from "@lib/utils"
import { useTranslations } from "@i18n/ui"
import { trackEvent } from "@lib/analytics"

type ProjectCard = {
  collection: string
  slug: string
  data: any
}

type Props = {
  lang?: "es" | "en";
  tags: string[]
  categories: string[]
  data: ProjectCard[]
}

export default function Projects({ data, tags, categories, lang = "es" }: Props) {
  const t = useTranslations(lang);
  const [tagFilter, setTagFilter] = createSignal(new Set<string>())
  const [catFilter, setCatFilter] = createSignal(new Set<string>())
  const [projects, setProjects] = createSignal<ProjectCard[]>([])

  createEffect(() => {
    setProjects(data.filter((entry) => {
      const matchesTags = Array.from(tagFilter()).every((value) => 
        entry.data.tags.some((tag:string) => 
          tag.toLowerCase() === String(value).toLowerCase()
        )
      )
      const matchesCats = Array.from(catFilter()).every((value) => 
        String((entry.data as any).category).toLowerCase() === String(value).toLowerCase()
      )
      return matchesTags && matchesCats
    }))
  })

  function toggleTag(tag: string) {
    trackEvent("filter_toggle", { type: "tag", value: tag })
    setTagFilter((prev) => 
      new Set(prev.has(tag) 
        ? [...prev].filter((t) => t !== tag) 
        : [...prev, tag]
      )
    )
  }

  function toggleCategory(cat: string) {
    trackEvent("filter_toggle", { type: "category", value: cat })
    setCatFilter((prev) => 
      new Set(prev.has(cat) 
        ? [...prev].filter((c) => c !== cat) 
        : [...prev, cat]
      )
    )
  }

  return (
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
      <div class="col-span-3 sm:col-span-1">
        <div class="sticky top-24 space-y-6">
          <div>
            <div class="text-sm font-semibold uppercase mb-2 text-term-fg">{t("filters.category")}</div>
            <ul class="flex flex-wrap sm:flex-col gap-1.5">
              <For each={categories}>
                {(cat) => (
                  <li>
                    <button onClick={() => toggleCategory(cat)} class={cn("w-full px-2 py-1 rounded", "whitespace-nowrap overflow-hidden overflow-ellipsis", "flex gap-2 items-center", "bg-term-panel", "hover:bg-term-border", "transition-colors duration-300 ease-in-out", catFilter().has(cat) && "text-term-fg")}>
                      <svg class={cn("size-5 fill-term-dim", "transition-colors duration-300 ease-in-out", catFilter().has(cat) && "fill-term-fg")}>
                        <use href={`/ui.svg#square`} class={cn(!catFilter().has(cat) ? "block" : "hidden")} />
                        <use href={`/ui.svg#square-check`} class={cn(catFilter().has(cat) ? "block" : "hidden")} />
                      </svg>
                      {cat}
                    </button>
                  </li>
                )}
              </For>
            </ul>
          </div>
          <div>
            <div class="text-sm font-semibold uppercase mb-2 text-term-fg">{t("filters.tags")}</div>
            <ul class="flex flex-wrap sm:flex-col gap-1.5">
              <For each={tags}>
                {(tag) => (
                  <li>
                    <button onClick={() => toggleTag(tag)} class={cn("w-full px-2 py-1 rounded", "whitespace-nowrap overflow-hidden overflow-ellipsis", "flex gap-2 items-center", "bg-term-panel", "hover:bg-term-border", "transition-colors duration-300 ease-in-out", tagFilter().has(tag) && "text-term-fg")}>
                      <svg class={cn("size-5 fill-term-dim", "transition-colors duration-300 ease-in-out", tagFilter().has(tag) && "fill-term-fg")}>
                        <use href={`/ui.svg#square`} class={cn(!tagFilter().has(tag) ? "block" : "hidden")} />
                        <use href={`/ui.svg#square-check`} class={cn(tagFilter().has(tag) ? "block" : "hidden")} />
                      </svg>
                      {tag}
                    </button>
                  </li>
                )}
              </For>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-span-3 sm:col-span-2">
        <div class="flex flex-col">
          <div class="text-sm uppercase mb-2">
            {t("projects.showing", { count: projects().length, total: data.length })}
          </div>
          <ul class="flex flex-col gap-3">
            {projects().map((project) => (
              <li>
                <ArrowCard entry={project} lang={lang} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
