import Link from "next/link";

import styles from "./about.module.css";

export const metadata = {
  title: "За нас - Autoblog | Новини за коли",
  description:
    "Autoblog е блог за автомобили, авточасти втора употреба и бракуване на коли. Пишем практични съвети за всеки собственик на автомобил.",
  alternates: {
    canonical: "https://kolipari.com/about",
  },
  openGraph: {
    title: "За нас - Autoblog | Новини за коли",
    description:
      "Autoblog е блог за автомобили, авточасти втора употреба и бракуване на коли. Пишем практични съвети за всеки собственик на автомобил.",
    url: "https://kolipari.com/about",
    siteName: "Autoblog",
    locale: "bg_BG",
    type: "website",
    images: [
      {
        url: "https://kolipari.com/og/about.webp",
        width: 1200,
        height: 630,
        alt: "за нас autoblog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "За нас - Autoblog | Новини за коли",
    description: "Autoblog е блог за автомобили, авточасти втора употреба и бракуване на коли.",
    images: ["https://kolipari.com/og/about.webp"],
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
            решения за тяхното отстраняване. До различни предложения за
            спасяване на автомобила от бракуване чрез намиране на подходящи,
            надеждни{" "}
            <a href="https://carco.bg/" target="_blank" rel="noopener noreferrer">
              <strong>авточасти втора употреба</strong>
            </a>
            , с които да се вдъхне нов живот на колата.
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

          <p className={styles.section_text}>
            В блога ще намерите теми като{" "}
            <Link href="/blog/kogato-dvigatela-e-za-smyana">
              <strong>кога двигателят е за смяна</strong>
            </Link>
            ,{" "}
            <Link href="/blog/priznaci-na-povreda-skoresna-kutiya">
              <strong>признаци на повредена скоростна кутия</strong>
            </Link>
            ,{" "}
            <Link href="/blog/kak-da-podgotvya-kola-za-brakuvane">
              <strong>как да подготвите кола за бракуване</strong>
            </Link>{" "}
            и много повече практични съвети за всеки собственик на автомобил.
          </p>

          <Link href="/blog/" className={styles.card_link}>
            Към блога
          </Link>
        </section>
      </main>
    </>
  );
}

