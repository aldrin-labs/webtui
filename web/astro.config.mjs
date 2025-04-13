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
    '/examples/email': '/examples',
    '/examples/auth': '/examples',
    '/examples/ecommerce': '/examples',
    '/examples/aichat': '/examples',
    '/examples/dashboard': '/examples',
    '/examples/calendar': '/examples',
    '/examples/allcomponents': '/examples',
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
