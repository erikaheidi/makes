---
mode: agent
description: Safely update model content schema and related pages
---

Update the model content schema in this Astro project and wire the change through templates.

Process:
1. Inspect `src/content.config.ts` and identify required and optional fields.
2. Apply the requested schema change with backward compatibility when possible.
3. Update usages in:
   - `src/pages/index.astro`
   - `src/pages/models/[slug].astro`
   - `src/components/ModelCard.astro`
4. Avoid unrelated refactors.
5. Run build validation and report errors clearly.

Output:
- Files changed
- Migration notes for existing markdown content
- Validation result summary
