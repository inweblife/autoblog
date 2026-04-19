const SITE_URL = "https://autoblog-bg.netlify.app";

export default function sitemap() {
  return [
    { url: `${SITE_URL}/`, lastModified: "2026-02-06", priority: 1.0 },
    { url: `${SITE_URL}/blog`, lastModified: "2026-04-19", priority: 0.9 },
    { url: `${SITE_URL}/about`, lastModified: "2026-02-06", priority: 0.7 },
    { url: `${SITE_URL}/blog/izkupuvane-na-koli-za-chasti`, lastModified: "2026-04-19", priority: 0.85 },
    { url: `${SITE_URL}/blog/kak-raboti-koli-za-skrap-kalkulatora`, lastModified: "2026-04-19", priority: 0.85 },
    { url: `${SITE_URL}/blog/priznaci-na-povreda-skoresna-kutiya`, lastModified: "2026-02-06", priority: 0.80 },
    { url: `${SITE_URL}/blog/kogato-dvigatela-e-za-smyana`, lastModified: "2026-02-06", priority: 0.80 },
    { url: `${SITE_URL}/blog/izkupuvane-na-koli-za-skrap`, lastModified: "2026-02-06", priority: 0.80 },
    { url: `${SITE_URL}/blog/kak-da-podgotvya-kola-za-brakuvane`, lastModified: "2026-02-06", priority: 0.80 },
    { url: `${SITE_URL}/blog/documenti-za-da-brakuvate-kola`, lastModified: "2026-02-06", priority: 0.80 },
    { url: `${SITE_URL}/blog/kolko-struva-kola-za-brakuvane`, lastModified: "2026-02-06", priority: 0.80 },
  ];
}
