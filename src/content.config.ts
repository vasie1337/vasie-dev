import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()).default([]),
    stars: z.number().int().nonnegative().optional(),
    url: z.string().url().optional(),
    order: z.number().optional(),
  }),
});

export const collections = { projects };
