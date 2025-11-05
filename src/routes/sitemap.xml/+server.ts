import type { RequestHandler } from '@sveltejs/kit';

const BASE_URL = 'https://sakethbalijepalli.com';

export const GET: RequestHandler = async () => {
  const pages = [
    '',
    'work',
    'projects',
    'skills',
    'blog',
    'contact'
  ];
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `
  <url>
    <loc>${BASE_URL}/${page}</loc>
    <changefreq>monthly</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>`
  )
  .join('')}
</urlset>`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml'
    }
  });
};
