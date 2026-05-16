import type { APIRoute } from 'astro';

export const prerender = true;

// /sitemap.xml -> /sitemap-index.xml (Astro's sitemap integration outputs
// sitemap-index.xml; many crawlers and tools probe /sitemap.xml first).
export const GET: APIRoute = ({ site }) => {
  const base = site ?? new URL('https://expert-flow-start-2-0.vercel.app');
  const target = new URL('sitemap-index.xml', base).toString();
  return new Response(null, {
    status: 301,
    headers: { Location: target },
  });
};
