import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const docs = defineCollection({
  // 使用 glob loader 读取 src/content/docs 下的 .mdx 文件
  loader: glob({ pattern: '**/*.mdx', base: './src/content/docs' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string().optional().default('Lion'), // 默认值改为文字
    animalType: z.string().optional().default('lion'),
    coverPrompt: z.string().optional(),
    tags: z.array(z.string()).optional(),
    difficulty: z.string().optional(),
  }),
});

export const collections = { docs };
