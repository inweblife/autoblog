import Link from "next/link";

import styles from "./about.module.css";

export const metadata = {
  title: "За нас | Autoblog",
  description: "За нас и защо пишем новини за автомобили, авточасти и бракуване на коли",
  alternates: {
    canonical: 'https://autoblog-bg.netlify.app/about',
  },
  openGraph: {
    title: 'За нас | Autoblog',
    description: 'За нас и защо пишем новини за автомобили, авточасти и бракуване на коли',
    url: 'https://autoblog-bg.netlify.app/about',
    siteName: 'Autoblog',
    locale: 'bg_BG',
    type: 'website',
    images: [
      {
        url: 'https://autoblog-bg.netlify.app/og/about.webp',
        width: 1200,
        height: 630,
        alt: 'a lady read news',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'За нас | Autoblog',
    description: 'За нас и защо пишем новини за автомобили, авточасти и бракуване на коли',
    images: ['https://autoblog-bg.netlify.app/og/about.webp'],
  },
};

export default function about() {
  return (
    <>
      <main className={styles.container}>
        <div className={styles.cover}>
          <h1 className={styles.title}>За нас - Autoblog</h1>
        </div>

        <section className={styles.section}>
          <h2 className={styles.section_title}>За нас Autoblog</h2>
          <p className={styles.section_text}>
            Ние сме страстни ентусиасти на тема автомобили. Последните няколко
            години от живота ни минават в работа свързана изцяло с автомобилната
            индустрия.
          </p>
          
          <p className={styles.section_text}>
            Непрекъснато сме в ритъма на най-новите неща свързани с употребявани
            автомобили - от разглеждане естеството на проблеми свързани с
            най-различни повреди в автомобила, диагностика и предлагането на
            решения за тяхното отстраняване. До различни предолжения за
            спасяване на автомобила от бракуване чрез намиране на подходящи,
            надеждни авточасти втора употреба, с които да се вдъхне нов живот на
            колата.
          </p>

          <h3 className={styles.section_title}>
            Удачни решения за повреди по автомобила
          </h3>

          <p className={styles.section_text}>
            От няколко години пишем публикации за различни проблеми, сиптоми за
            повреди по автомобилите. Разглеждаме най-често срещаните проблеми,
            причини за тяхната поява и търсим различен подход за тяхното
            отстраняване. В един ден решихме, че е дошло времето да направи свой
            собствен блог, в който да публикуваме нашите собствени анализи, за
            да може да бъдат лесно достъпни и напълно безплатни за нашите
            читатели.
          </p>

          <p className={styles.section_text}>
            Ние работим десетки години в автомобилния бранш като сме написали
            стотици материали по теми свързани с аварии по автомобилите,
            повреди, счупени части, подмяна с употребявани авточасти и
            най-различни предложения за решения на различни повреди с авточасти
            втора ръка. И, разбира се, в крайна сметка, ако не може да бъде
            спасен автомобила, винаги може да дадем най-добрите насоки за това,
            къде и как да го бракувате.
          </p>

          <Link href="/blog/" className={styles.card_link}>
            Към блога
          </Link>
        </section>
      </main>
    </>
  );
}
