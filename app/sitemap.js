import { posts, SITE_URL } from "../lib/posts";

export default function sitemap() {
  const postUrls = posts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: post.lastmod,
    priority: 0.8,
  }));

  return [
    {
      url: `${SITE_URL}/`,
      lastModified: "2026-02-06",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: posts[0].lastmod,
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: "2026-02-06",
      priority: 0.7,
    },
    ...postUrls,
  ];
}
