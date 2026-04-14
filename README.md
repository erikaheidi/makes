# ✦ Makes

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
tags: ["tag1", "tag2"]            # optional
material: "PLA"                   # optional
printTime: "4 hours"              # optional
date: 2026-01-01                  # optional
---

Your model description in Markdown here.
```

## Deployment

This site is configured for Netlify. Push to your connected branch and Netlify will build and deploy automatically.
