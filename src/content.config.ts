import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const models = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/models" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string().optional(),
    tags: z.array(z.string()).optional(),
    printTime: z.string().optional(),
    material: z.string().optional(),
    date: z.coerce.date().optional(),
  }),
});

export const collections = { models };
