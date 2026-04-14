---
applyTo: "src/content/models/**/*.md"
---

# Content Instructions

Use this guidance when adding or editing model markdown entries.

## Source of truth
- Frontmatter must match the `models` schema in `src/content.config.ts`.
- Required fields: `title`, `description`.
- Optional fields: `image`, `gallery`, `downloadUrl`, `tags`, `printTime`, `material`, `paintingAdvice`, `printAdvice`, `date`.

## Frontmatter conventions
- Use concise, descriptive `title` values.
- Keep `description` useful for catalog cards (1-2 sentences max).
- Use `downloadUrl` only for valid absolute URLs.
- Use `gallery` items with required `src` and `alt`; add `caption` only when helpful.
- Use `tags` as short lowercase labels unless a proper name needs casing.
- Use `paintingAdvice` as slugs that map to entries in `src/content/painting-advice`.
- Keep `printAdvice.settings` as readable label/value pairs; keep `notes` concise.
- Prefer ISO date values (`YYYY-MM-DD`) for `date`.
- Keep file names slug-like and URL friendly.

## Body content conventions
- Keep body text practical and short.
- Use headings only when they add clarity.
- Avoid duplicate information already present in frontmatter.

## Quality checks
- Ensure required fields are present.
- Ensure optional fields have correct types.
- Avoid adding unsupported frontmatter keys unless schema is updated first.
