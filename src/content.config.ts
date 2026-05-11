import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const docs = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/docs' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string().optional().default('Lion'),
    animalType: z.string().optional().default('lion'),
    coverPrompt: z.string().optional(),
    tags: z.array(z.string()).optional(),
    difficulty: z.string().optional(),
  }),
});

export const collections = { docs };
