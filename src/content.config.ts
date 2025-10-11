import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const news = defineCollection({
    loader: glob({ pattern: '**/*.md', base: 'src/content/news' }),
    schema: z.object({
        title: z.string(),
        date: z.string(),
        author: z.string(),
        tags: z.array(z.string()).default([]),
        image: z.string(),
        link: z.string(),
        excerpt: z.string().max(300),
  }),
});

export const collections = { news };

