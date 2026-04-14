---
mode: agent
description: Add a new 3D model entry to the catalog
---

Add a new model entry to this Astro catalog.

Inputs:
- Model title
- Slug preference (if not provided, derive from title)
- Description
- Optional: image path, tags, material, print time, date

Requirements:
1. Create a markdown file in `src/content/models` named with the slug.
2. Include frontmatter fields aligned with `src/content.config.ts`.
3. Add a short, useful markdown body description.
4. Keep wording consistent with existing content tone.
5. Validate there are no schema-breaking fields.

Output:
- File path created
- Frontmatter summary
- Any assumptions made for missing optional fields
