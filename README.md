# ✦ Heidi Makes

A 3D model catalog built with [Astro](https://astro.build) and hosted on [Netlify](https://www.netlify.com).

## Getting Started

```bash
npm install
npm run dev      # Start dev server
npm run build    # Build for production
npm run preview  # Preview production build
```

## Adding Models

Add a new `.md` file in `src/content/models/` with the following frontmatter:

```markdown
---
title: "Model Name"
description: "A short description of the model."
image: "/images/model-name.jpg"   # optional
gallery:                            # optional
	- src: "/images/model-name-1.jpg"
		alt: "Model front view"
		caption: "Front angle"         # optional
downloadUrl: "https://example.com/model" # optional
tags: ["tag1", "tag2"]            # optional
material: "PLA"                   # optional
printTime: "4 hours"              # optional
paintingAdvice:                    # optional, references src/content/painting-advice slugs
	- "surface-prep-and-primer"
printAdvice:                       # optional
	settings:
		- label: "Layer Height"
			value: "0.2mm"
		- label: "Infill"
			value: "15%"
	notes: "Use supports for overhangs."
date: 2026-01-01                  # optional
---

Your model description in Markdown here.
```

### Frontmatter field reference

- Required: `title`, `description`.
- Optional scalar fields: `image`, `downloadUrl`, `tags`, `printTime`, `material`, `date`.
- Optional `gallery`: array of image objects with `src`, `alt`, and optional `caption`.
- Optional `paintingAdvice`: array of painting advice slugs from `src/content/painting-advice`.
- Optional `printAdvice`: object with optional `settings` (`label` + `value`) and optional `notes`.

## Deployment

This site is configured for Netlify. Push to your connected branch and Netlify will build and deploy automatically.
