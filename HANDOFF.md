# Tech Stacks Handoff

This file is a session handoff for future work inside:

`/Users/rocha/Documents/AI-Projects/tech-stacks`

The earlier conversation began from the broader `AI-Projects` folder, but the actual project/repo for this site is the `tech-stacks` folder above.

## What This Project Is

`tech-stacks` is an Astro-based static site that documents the tech stack of projects inside the larger `AI-Projects` workspace.

It includes:

- a home page with project cards
- one stack explainer page per project
- bilingual support in English and Portuguese
- shared project screenshots
- shared layout/components for consistent structure

## Repo and Deployment

- Repo root: `/Users/rocha/Documents/AI-Projects/tech-stacks`
- Git remote: `https://github.com/lularocha/tech-stacks.git`
- Main branch: `main`
- Vercel-linked project exists via `.vercel/project.json`
- Astro output is static
- Astro build format is `file`

Important routing consequence:

- English home builds to `/`
- Portuguese home builds to `/pt.html`
- English project pages build to `/<slug>.html`
- Portuguese project pages build to `/pt/<slug>.html`

## Current Stack

- `Astro 5`
- static output
- shared styles in `src/styles/global.css`
- shared metadata/content in `src/data/projects.ts`
- simple browser script in `public/scripts/menu.js`

## Key Files

- `src/data/projects.ts`
  - main source of truth for:
    - site title
    - project list
    - English and Portuguese summaries
    - live URLs
    - image paths
    - locale helpers
    - shared UI strings

- `src/layouts/BaseLayout.astro`
  - shared page shell
  - passes locale into shared header/footer

- `src/components/Header.astro`
  - site title
  - EN/PT switcher
  - menu with project links
  - locale-aware nav behavior

- `src/components/Footer.astro`
  - localized footer text

- `src/components/ProjectHero.astro`
  - hero title/lead/live link/project image
  - localized shared labels like:
    - Tech Stack Review
    - Live at
    - At a glance

- `src/components/ProjectCard.astro`
  - home page project cards
  - includes circular thumbnail image above title

- `public/project-images/`
  - project screenshots used in hero and home cards

- `public/scripts/menu.js`
  - menu open/close logic
  - persistent language selection via `localStorage`

## Current Projects in the Site

These are currently included in the site:

- `mybtc-calculator-stack`
- `capital-gains-calculator-stack`
- `card-tracker-stack`
- `dots-animation-stack`
- `glossary-builder-stack`
- `hash-calculator-stack`
- `prompt-builder-stack`
- `qr-code-generator-stack`

Portuguese versions exist for all of the above under `src/pages/pt/`.

## Important Naming Decision

The route previously called `sbe-animation-stack` was renamed inside this repo to:

- `dots-animation-stack`

Important nuance:

- inside `tech-stacks`, references should use `dots-animation...`
- but the actual external source project folder on disk is still:
  - `/Users/rocha/Documents/AI-Projects/sbe-animation`

That path remains accurate in source-basis notes because it points to the real project folder outside this repo.

## i18n Decisions Already Made

The bilingual strategy is already implemented with these rules:

- full-site bilingual support
- English is default
- Portuguese is second language
- persistent language switcher
- switch keeps user on equivalent page when possible
- English fallback is acceptable when PT content is missing
- project titles are not translated
- site title is not translated
- footer is translated
- home summaries are translated

Current path strategy chosen for simplicity:

- English home: `/`
- Portuguese home: `/pt.html`

Language switcher:

- lives in the header next to the menu
- uses `EN / PT`
- persists choice in `localStorage`

## Design / UI Decisions Already Established

These are current visual decisions and should generally be preserved unless intentionally changed:

- neutral gray page background
- orange accent `#ff7700`
- yellow top border on body
- system sans + system monospace
- shared radius token:
  - `--radius: 0.5rem`
- home card images:
  - circular
  - `80px`
  - soft shadow
- project hero images:
  - `260px`
  - top-left crop
  - small rounded rectangle using `var(--radius)`
  - soft shadow
- hero background spans full width in white
- “At a glance” uses flat list rows, not boxed card styling
- site title in header:
  - `AI Projects / Tech Stacks`
- small kicker above title:
  - `sugiro.ai`

## README Status

A repo README now exists at:

- `README.md`

It documents:

- local development
- structure
- routing
- content model
- adding a new project
- deployment notes

## Legacy Files

There are older root-level static files still present from the pre-Astro version, such as:

- `index.html`
- `card-tracker-stack.html`
- `glossary-builder-stack.html`
- `styles/`
- `scripts/`

These are no longer the source of truth.

The Astro source of truth is:

- `src/`
- `public/`

## Local Development Commands

From the repo root:

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Verification Expectation

Before committing meaningful changes, run:

```bash
npm run build
```

This has been the verification command used throughout the project.

## Recent Commit Context

Recent notable commits include:

- `49facab` `Add Portuguese localization across the site`
- `22cf833` `Rename dots animation route and add README`

## Suggested Starting Point For Next Session

If starting a new session, begin in:

`/Users/rocha/Documents/AI-Projects/tech-stacks`

Then:

1. Read `README.md`
2. Read this `HANDOFF.md`
3. Inspect `src/data/projects.ts`
4. Continue from the Astro structure, not the old static files

## Recommended Future Work Pattern

When adding a new project page:

1. Add the project entry in `src/data/projects.ts`
2. Add the screenshot to `public/project-images/`
3. Create English page in `src/pages/`
4. Create Portuguese page in `src/pages/pt/`
5. Reuse existing shared components and layout
6. Run `npm run build`

