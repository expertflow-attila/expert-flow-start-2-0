// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://expert-flow-start-2-0.vercel.app',
  trailingSlash: 'never',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/robots.txt'),
    }),
  ],
});
