import { defineCollection, z } from 'astro:content';

const docs = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string().optional().default('🦁'),
    animalType: z.string().optional().default('lion'),
    coverPrompt: z.string().optional(),
    tags: z.array(z.string()).optional(),
    difficulty: z.string().optional(),
  }),
});

export const collections = { docs };
