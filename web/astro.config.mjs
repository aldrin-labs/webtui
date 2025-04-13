// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import { rehypeHeadingIds } from '@astrojs/markdown-remark';
import rehypeTabIndex from '@webtui/rehype-tabindex';

// https://astro.build/config
export default defineConfig({
  site: 'https://aldrin-labs.github.io',
  base: '/webtui',
  trailingSlash: 'always',
  redirects: {
    '/docs': '/start/intro',
    '/start': '/start/intro',
  },
  markdown: {
    rehypePlugins: [rehypeHeadingIds, rehypeTabIndex],
    shikiConfig: {
      theme: 'catppuccin-mocha',
      wrap: true,
    },
  },
  integrations: [mdx({ extendMarkdownConfig: true })],
  vite: {
    ssr: {
      noExternal: ['@webtui/theme-catppuccin', '@webtui/css'],
    },
  },
});
