# Copilot Instructions for makes

## Project overview
- This repository is an Astro static site for a 3D model catalog.
- Content is markdown-driven via Astro Content Collections.
- Main goals: clear content editing flow, clean UI, and predictable static builds.

## Tech stack
- Astro 6
- TypeScript config available via `tsconfig.json`
- Markdown content under `src/content/models`

## Important paths
- `src/pages/index.astro`: home page listing models.
- `src/pages/models/[slug].astro`: dynamic detail page for each model.
- `src/components/ModelCard.astro`: listing card component.
- `src/layouts/BaseLayout.astro`: base page layout.
- `src/content.config.ts`: content collection schema.
- `src/content/models/*.md`: source content for models.

## Coding guidelines
- Preserve existing Astro structure and route behavior.
- Keep components small and readable.
- Avoid introducing dependencies unless clearly necessary.
- Prefer explicit, simple logic over clever abstractions.
- Keep changes focused and do not reformat unrelated files.

## Content guidelines
- New models should be added as markdown files in `src/content/models`.
- Frontmatter should match the schema in `src/content.config.ts`.
- Model frontmatter supports optional `gallery`, `downloadUrl`, `paintingAdvice`, and `printAdvice` in addition to existing optional fields.
- Keep descriptions concise and useful.
- Use consistent tag casing.

## Validation checklist
- Run `npm run build` after significant code or schema changes.
- If route changes are made, also run `npm run dev` and verify:
  - home page renders model cards
  - model detail pages resolve correctly by slug

## Pull request expectations
- Summarize what changed and why.
- Mention any schema or content structure updates.
- Include manual verification notes (build or page checks).
