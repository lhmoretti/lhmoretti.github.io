import defaultTheme from "tailwindcss/defaultTheme"

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["JetBrains Mono", ...defaultTheme.fontFamily.mono],
      },
      colors: {
        term: {
          bg: "#0c0a06",      // near-black warm
          panel: "#141007",   // hover/panel
          fg: "#ffb000",      // amber primary (phosphor)
          bright: "#ffcf5c",  // bright amber for emphasis
          text: "#d8b984",    // body text
          dim: "#8a6d3b",     // metadata / comments
          border: "#3a2f16",  // borders
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "full",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
