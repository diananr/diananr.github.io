import { glob } from 'astro/loaders';
import { z, defineCollection } from 'astro:content';

const journal = defineCollection({
  loader: glob({ pattern: '**/[^_]*.mdx', base: './src/content/journal' }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string(),
    tags: z.array(z.string()),
  }),
});

export const collections = { journal };
