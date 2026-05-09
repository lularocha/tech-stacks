# AI Projects / Tech Stacks

Static Astro site that documents the tech stacks used across projects in the `AI-Projects` workspace.

The site includes:

- a home page with project cards
- one explainer page per project
- bilingual support for English and Portuguese
- shared project screenshots and reusable layout/components

## Stack

- `Astro 5`
- static output
- shared CSS in `src/styles/global.css`
- shared content/data in `src/data/projects.ts`
- Vercel deployment

## Local Development

Install dependencies and start the Astro dev server:

```bash
npm install
npm run dev
```

Build the static site:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Project Structure

```text
src/
  components/
    Header.astro
    Footer.astro
    ProjectCard.astro
    ProjectHero.astro
  data/
    projects.ts
  layouts/
    BaseLayout.astro
  pages/
    index.astro
    *.astro
    pt/
      index.astro
      *.astro
  styles/
    global.css

public/
  favicon.png
  placeholder-project.svg
  project-images/
  scripts/menu.js
```

## Routing and Languages

English is the default site language.

- English home: `/`
- Portuguese home: `/pt.html`
- English project pages: `/<slug>.html`
- Portuguese project pages: `/pt/<slug>.html`

The site uses `build.format = "file"` in `astro.config.mjs`, so the Portuguese home route builds to `pt.html` instead of `/pt/`.

The header language switcher:

- persists the selected language in `localStorage`
- keeps the user on the equivalent page when possible
- falls back to English routes when a Portuguese route is unavailable

## Content Model

Shared project metadata lives in `src/data/projects.ts`.

Each project entry currently includes:

- `slug`
- `title`
- `summary.en`
- `summary.pt`
- `liveUrl`
- `imageSrc`
- `locales`

Shared UI copy for the bilingual chrome also lives in the same file for now.

## Adding a New Project

1. Add a new entry to `src/data/projects.ts`.
2. Add the project screenshot to `public/project-images/`.
3. Create the English page in `src/pages/<slug>.astro`.
4. Create the Portuguese page in `src/pages/pt/<slug>.astro`.
5. Reuse `BaseLayout` and `ProjectHero` so the structure stays consistent.
6. Run `npm run build` to verify routes and assets.

## Assets

Project screenshots used in the hero sections and home cards live in:

```text
public/project-images/
```

These images are referenced by `imageSrc` in `src/data/projects.ts`.

## Deployment

This repo is already linked to Vercel through the local `.vercel/` config.

The site is configured for static output in:

- `astro.config.mjs`

## Notes

- There are legacy root-level HTML/CSS files from the earlier non-Astro version of the site. The Astro source of truth is the `src/` and `public/` folders.
- Always run `npm run build` before committing changes that affect routes, assets, or localized pages.
