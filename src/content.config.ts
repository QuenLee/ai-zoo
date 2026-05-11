import { defineCollection, z } from 'astro:content';

const docs = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    lang: z.string().optional().default('zh-CN'),
    series: z.string().optional(),
    coverPrompt: z.string().optional(),
    tags: z.array(z.string()).optional(),
    difficulty: z.string().optional(),
  }),
});

export const collections = { docs };
