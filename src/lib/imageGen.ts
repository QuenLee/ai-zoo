// src/lib/imageGen.ts
// AI 动物园 - 封面生成工具

export interface ImageGenOptions {
  prompt: string;
  width?: number;
  height?: number;
  seed?: number;
}

const API_URL = 'https://api-image.quen.us.kg/';
const API_KEY = 'Quen1234';

/**
 * 生成 AI 图片 URL
 * @param prompt - 提示词
 * @param width - 宽度 (默认 1024)
 * @param height - 高度 (默认 1024)
 * @param seed - 随机种子 (可选)
 * @returns 图片 URL
 */
export function generateImageUrl(
  prompt: string,
  width: number = 1024,
  height: number = 1024,
  seed?: number
): string {
  const params = new URLSearchParams({
    prompt: prompt,
    width: width.toString(),
    height: height.toString(),
    api_key: API_KEY,
  });

  if (seed) {
    params.append('seed', seed.toString());
  }

  return `${API_URL}?${params.toString()}`;
}

/**
 * 为动物卡片生成封面提示词模板
 */
export function getAnimalCoverPrompt(animal: string, style: string = 'cyberpunk'): string {
  const prompts: Record<string, string> = {
    lion: `A majestic lion made of glowing digital data streams and circuit boards, ${style} style, vibrant neon colors, 8k resolution, highly detailed`,
    parrot: `A colorful parrot with feathers made of book pages and binary code, ${style} style, magical atmosphere, 8k resolution`,
    peacock: `A peacock displaying feathers made of colorful AI-generated art pieces, ${style} style, vibrant and dazzling, 8k resolution`,
    ant: `A hardworking ant carrying digital data blocks, macro photography style, detailed, 8k resolution`,
    giraffe: `A giraffe with a long neck made of server racks and cloud computing symbols, ${style} style, 8k resolution`,
    default: `A futuristic AI robot animal, ${style} style, vibrant colors, 8k resolution, highly detailed`
  };

  return prompts[animal] || prompts.default;
}
