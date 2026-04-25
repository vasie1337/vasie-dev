import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const writeups = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/writeups" }),
    schema: z.object({
        title: z.string(),
        date: z.coerce.date(),
        summary: z.string(),
        tags: z.array(z.string()).default([]),
        draft: z.boolean().default(false),
    }),
});

export const collections = { writeups };
