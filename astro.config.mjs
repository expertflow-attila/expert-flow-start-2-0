// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Remark plugin: strip the first top-level (depth 1) heading from each
// markdown file, so module pages don't end up with two <h1> elements
// (the page already renders the module title from frontmatter as <h1>).
function remarkStripFirstH1() {
  return (tree) => {
    for (let i = 0; i < tree.children.length; i++) {
      const node = tree.children[i];
      if (node.type === 'heading' && node.depth === 1) {
        tree.children.splice(i, 1);
        return;
      }
    }
  };
}

// https://astro.build/config
export default defineConfig({
  site: 'https://expert-flow-start-2-0.vercel.app',
  trailingSlash: 'never',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/robots.txt'),
    }),
  ],
  markdown: {
    remarkPlugins: [remarkStripFirstH1],
  },
});
