import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: Date, lang: "es" | "en" = "es") {
  return Intl.DateTimeFormat(lang === "es" ? "es-AR" : "en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric"
  }).format(date)
}

export function readingTime(html: string, lang: "es" | "en" = "es") {
  const textOnly = html.replace(/<[^>]+>/g, "")
  const wordCount = textOnly.split(/\s+/).length
  const minutes = ((wordCount / 200) + 1).toFixed()
  return lang === "es" ? `${minutes} min de lectura` : `${minutes} min read`
}
