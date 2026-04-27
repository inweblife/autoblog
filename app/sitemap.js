import { posts, SITE_URL } from '../lib/posts';

export default function sitemap() {
  const postUrls = posts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: post.lastmod,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [
    {
      url: SITE_URL,
      lastModified: '2026-04-19',
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: '2026-04-19',
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: '2026-02-06',
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    ...postUrls,
  ];
}
