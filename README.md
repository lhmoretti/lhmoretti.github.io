# lhmoretti.github.io

Personal site / resume of Lucas Moretti, built with [Astro](https://astro.build), Tailwind CSS and a terminal aesthetic. Deployed to GitHub Pages via GitHub Actions.

## Commands

All commands are run from the root of the project, from a terminal:

| Command           | Action                                            |
| :---------------- | :------------------------------------------------ |
| `pnpm install`    | Installs dependencies                             |
| `pnpm run dev`    | Starts local dev server at `localhost:4321`       |
| `pnpm run build`  | Build your production site to `./dist/`           |
| `pnpm run preview`| Preview your build locally, before deploying      |
| `pnpm run lint`   | Run ESLint                                        |

## Content

Content lives in `src/content/` as Markdown collections:

- `projects/` — one `.md` per project (title, summary, tags, category, demoType, repoUrl…)
- `work/` — work experience entries
- `courses/` — courses / education
- `certifications/` — certifications

To add a project, create a new `.md` in `src/content/projects/` following the schema in `src/content/config.ts`.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and publishes `dist/` to GitHub Pages. In the repo settings, set **Pages → Source → GitHub Actions**.
