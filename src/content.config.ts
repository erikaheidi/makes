import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const models = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/models" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string().optional(),
    gallery: z
      .array(
        z.object({
          src: z.string(),
          alt: z.string(),
          caption: z.string().optional(),
        }),
      )
      .optional(),
    downloadUrl: z.string().url().optional(),
    tags: z.array(z.string()).optional(),
    printTime: z.string().optional(),
    material: z.string().optional(),
    paintingAdvice: z.array(z.string()).optional(),
    printAdvice: z
      .object({
        settings: z
          .array(
            z.object({
              label: z.string(),
              value: z.string(),
            }),
          )
          .optional(),
        notes: z.string().optional(),
      })
      .optional(),
    date: z.coerce.date().optional(),
  }),
});

const paintingAdvice = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/painting-advice" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
  }),
});

const printingGuides = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/printing-guides" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
  }),
});

export const collections = { models, paintingAdvice, printingGuides };
