---
applyTo: "src/{components,layouts,pages}/**/*.{astro,ts,tsx,js,jsx,css}"
---

# UI Instructions

Use this guidance when changing visual layout, styles, or component markup.

## Core rules
- Preserve route behavior and data flow.
- Keep Astro templates readable and minimal.
- Reuse existing design tokens and CSS variables from `BaseLayout.astro`.
- Do not add dependencies for styling-only updates unless clearly justified.

## Accessibility and responsive behavior
- Keep semantic markup and meaningful headings.
- Ensure image `alt` text remains useful.
- Maintain keyboard usability for interactive controls.
- Verify mobile and desktop layout behavior after changes.

## Performance and maintainability
- Prefer small, targeted CSS updates over broad rewrites.
- Avoid unnecessary DOM complexity.
- Keep hover/transition effects subtle and purposeful.

## Validation
- Run `npm run build` after UI edits affecting multiple files.
- Confirm home page and model detail pages still render correctly.
