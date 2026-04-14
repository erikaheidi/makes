---
applyTo: "src/content.config.ts"
---

# Schema Instructions

Use this guidance when changing the content schema.

## Change process
1. Update schema in `src/content.config.ts`.
2. Update all template usages that depend on changed fields:
   - `src/components/ModelCard.astro`
   - `src/pages/index.astro`
   - `src/pages/models/[slug].astro`
3. Check existing markdown entries in `src/content/models` for compatibility.

## Compatibility strategy
- Prefer additive, optional fields when possible.
- If a field becomes required, document migration steps and update existing content.
- Keep field names explicit and stable to avoid downstream churn.

## Validation
- Run `npm run build` and resolve content validation errors.
- Ensure date handling remains consistent (`z.coerce.date()` behavior).

## Reporting
- Summarize files changed.
- Note migration requirements for existing content.
- List any intentional breaking changes.
