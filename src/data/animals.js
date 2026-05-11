// src/data/animals.js
// 把动物数据移到外部 JS 文件，避免 Astro Frontmatter 解析 bug

export const animals = [
  {
    id: 'llm',
    name: 'LLM (大语言模型)',
    icon: 'Lion',
    animalType: 'lion',
    description: '博学但爱吹牛的超级鹦鹉',
    difficulty: '中级',
    tags: ['AI 入门', '文本生成'],
  },
  {
    id: 'midjourney',
    name: 'Midjourney',
    icon: 'Peacock',
    animalType: 'peacock',
    description: '绚丽多彩的视觉艺术家',
    difficulty: '高级',
    tags: ['图像生成', '设计'],
  },
  {
    id: 'notion-ai',
    name: 'Notion AI',
    icon: 'Ant',
    animalType: 'ant',
    description: '勤勤恳恳的整理大师',
    difficulty: '初级',
    tags: ['效率工具', '笔记'],
  },
];
