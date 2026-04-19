const SITE_URL = "https://autoblog-bg.netlify.app";

const posts = [
  {
    title: "Изкупуване на коли за части – честно за цените",
    slug: "izkupuvane-na-koli-za-chasti",
    description:
      "Продажба на кола за части или за скрап – кога има смисъл, как се формира реалната цена и защо инвестицията в ремонти не увеличава стойността на стария автомобил.",
    pubDate: "Sat, 19 Apr 2026 08:00:00 +0000",
    image: `${SITE_URL}/og/koli-za-chasti.webp`,
  },
  {
    title: "Как работи коли за скрап калкулатора",
    slug: "kak-raboti-koli-za-skrap-kalkulatora",
    description:
      "Как работи коли за скрап калкулатора – въведете марка, модел и местонахождение и веднага разберете цената на вашия автомобил при бракуване.",
    pubDate: "Sat, 19 Apr 2026 07:00:00 +0000",
    image: `${SITE_URL}/og/calculator.webp`,
  },
  {
    title: "Признаци на повредена скоростна кутия",
    slug: "priznaci-na-povreda-skoresna-kutiya",
    description:
      "Полезни съвети как да разпознаете признаци на повредена скоростна кутия и дали проблемът е в съединителя.",
    pubDate: "Thu, 06 Feb 2026 10:00:00 +0000",
    image: `${SITE_URL}/og/gearbox.webp`,
  },
  {
    title: "Когато двигателя е за смяна",
    slug: "kogato-dvigatela-e-za-smyana",
    description:
      "Кога се налага смяна на двигател и как да изберете надежден двигател втора употреба.",
    pubDate: "Thu, 06 Feb 2026 09:00:00 +0000",
    image: `${SITE_URL}/og/engine.webp`,
  },
  {
    title: "Изкупуване на коли за скрап",
    slug: "izkupuvane-na-koli-za-skrap",
    description: "Как работи процесът на изкупуване на коли за скрап и какво трябва да знаете.",
    pubDate: "Thu, 06 Feb 2026 08:00:00 +0000",
    image: `${SITE_URL}/og/oldcar.webp`,
  },
  {
    title: "Как да подготвя кола за бракуване",
    slug: "kak-da-podgotvya-kola-za-brakuvane",
    description: "Полезни съвети и стъпки за правилна подготовка на автомобил преди бракуване.",
    pubDate: "Thu, 06 Feb 2026 07:00:00 +0000",
    image: `${SITE_URL}/og/vehicle.webp`,
  },
  {
    title: "Документи за да бракувате кола",
    slug: "documenti-za-da-brakuvate-kola",
    description: "Какви са всички необходими документи, за да бракувате кола.",
    pubDate: "Thu, 06 Feb 2026 06:00:00 +0000",
    image: `${SITE_URL}/og/documenti.webp`,
  },
  {
    title: "Колко струва кола за бракуване",
    slug: "kolko-struva-kola-za-brakuvane",
    description: "Колко струва кола за бракуване и как да спечелите повече при продажбата за скрап.",
    pubDate: "Thu, 06 Feb 2026 05:00:00 +0000",
    image: `${SITE_URL}/og/carscrap.webp`,
  },
];

export async function GET() {
  const items = posts
    .map(
      (post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${SITE_URL}/blog/${post.slug}</link>
      <guid isPermaLink="true">${SITE_URL}/blog/${post.slug}</guid>
      <description><![CDATA[${post.description}]]></description>
      <pubDate>${post.pubDate}</pubDate>
      <enclosure url="${post.image}" type="image/webp" length="0"/>
    </item>`
    )
    .join("");

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:media="http://search.yahoo.com/mrss/">
  <channel>
    <title>Autoblog – новини за коли</title>
    <link>${SITE_URL}</link>
    <description>Новини за автомобили, авточасти втора употреба и бракуване на коли.</description>
    <language>bg</language>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml"/>
    <lastBuildDate>Sat, 19 Apr 2026 08:00:00 +0000</lastBuildDate>
    <image>
      <url>${SITE_URL}/cover.webp</url>
      <title>Autoblog</title>
      <link>${SITE_URL}</link>
    </image>
    ${items}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  });
}
