import { posts, SITE_URL } from "../../lib/posts";

export async function GET() {
  const postUrls = posts
    .map(
      (post) => `
  <url>
    <loc>${SITE_URL}/blog/${post.slug}</loc>
    <lastmod>${post.lastmod}T00:00:00+00:00</lastmod>
    <priority>0.80</priority>
  </url>`
    )
    .join("");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
              http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">

  <url>
    <loc>${SITE_URL}/</loc>
    <lastmod>2026-02-06T00:00:00+00:00</lastmod>
    <priority>1.00</priority>
  </url>

  <url>
    <loc>${SITE_URL}/blog</loc>
    <lastmod>${posts[0].lastmod}T00:00:00+00:00</lastmod>
    <priority>0.90</priority>
  </url>

  <url>
    <loc>${SITE_URL}/about</loc>
    <lastmod>2026-02-06T00:00:00+00:00</lastmod>
    <priority>0.70</priority>
  </url>
  ${postUrls}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  });
}
