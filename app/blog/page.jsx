import Image from "next/image";
import Link from "next/link";

import styles from "./blog.module.css";

export const metadata = {
  title: "Блог за коли | Autoblog",
  description:
    "Тук ще намерите отговорите на всички въпроси, свързани с ремонти на автомобили, авточасти втора употреба и бракуване на стари коли.",
  alternates: {
    canonical: "https://autoblog-bg.netlify.app/blog",
  },
  openGraph: {
    title: "Блог за коли | Autoblog",
    description:
      "Тук ще намерите отговорите на всички въпроси, свързани с ремонти на автомобили, авточасти втора употреба и бракуване на стари коли.",
    url: "https://autoblog-bg.netlify.app/blog",
    siteName: "Autoblog",
    locale: "bg_BG",
    type: "website",
    images: [
      {
        url: "https://autoblog-bg.netlify.app/blog.webp",
        width: 800,
        height: 600,
        alt: "Блог за коли – Autoblog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Блог за коли | Autoblog",
    description: "Тук ще намерите отговорите на всички въпроси, свързани с ремонти на автомобили, авточасти втора употреба и бракуване на стари коли.",
    images: ["https://autoblog-bg.netlify.app/blog.webp"],
  },
};

export default function Blog() {
  return (
    <>
      <main className={styles.container}>
        <div className={styles.cover}>
          <h1 className={styles.title}>Блогът на Autoblog</h1>
        </div>

        <section className={styles.section}>
          <h2 className={styles.section_title}>Последни новини от блога</h2>
          <p className={styles.section_text}>
            В блога на Autoblog ще може да намерите всякакви интересни теми
            свързани с автомобилната индустрия.
          </p>
          <section className={styles.section_one}>
            <div className={styles.card}>
              <Image
                src="/carscrap.webp"
                alt="car scrap"
                width={1024}
                height={768}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
              <Link href="/blog/kolko-struva-kola-za-brakuvane" className={styles.card_title} aria-label="Колко струва кола за бракуване">
                Колко струва кола за бракуване
              </Link>
              <p className={styles.card_text}>
                Искаете да знаете{" "}
                <a href="https://kolazascrap.com/blog/kolko-struva-kola-za-scrap/">
                  <strong>колко струва кола за скрап</strong>
                </a>
                , как да спечелите повече.
              </p>
              <Link
                href="/blog/kolko-struva-kola-za-brakuvane"
                className={styles.card_link}
              >
                Прочети още
              </Link>
            </div>

            <div className={styles.card}>
              <Image
                src="/documenti.webp"
                alt="car scrap"
                width={1024}
                height={768}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
              <Link href="/blog/documenti-za-da-brakuvate-kola" className={styles.card_title} aria-label="Документи за да бракувате кола">
                Документи за да бракувате кола
              </Link>
              <p className={styles.card_text}>
                Какви са всички необходими документи, за да{" "}
                <a href="https://kolazascrap.com/blog/brakuvane-na-avtomobil/">
                  <strong>бракувате автомобил</strong>
                </a>
                .
              </p>
              <Link
                href="/blog/documenti-za-da-brakuvate-kola"
                className={styles.card_link}
              >
                Прочети още
              </Link>
            </div>

            <div className={styles.card}>
              <Image
                src="/vehicle.webp"
                alt="car preparation"
                width={1024}
                height={768}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
              <Link href="/blog/kak-da-podgotvya-kola-za-brakuvane" className={styles.card_title} aria-label="Как да подготвя кола за бракуване">
                Как да подготвя кола за бракуване
              </Link>
              <p className={styles.card_text}>
                Полезни съвети и стъпки за правилна подготовка на{" "}
                <a href="https://kolazascrap.com/blog/stari-koli-za-brakuvane/" target="_blank" rel="noopener noreferrer">
                  <strong>автомобил за бракуване</strong>
                </a>
                .
              </p>
              <Link
                href="/blog/kak-da-podgotvya-kola-za-brakuvane"
                className={styles.card_link}
              >
                Прочети още
              </Link>
            </div>

            <div className={styles.card}>
              <Image
                src="/oldcar.webp"
                alt="old car scrapping"
                width={1024}
                height={768}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
              <Link href="/blog/izkupuvane-na-koli-za-skrap" className={styles.card_title} aria-label="Изкупуване на коли за скрап">Изкупуване на коли за скрап</Link>
              <p className={styles.card_text}>
                Как работи процесът на{" "}
                <a href="https://kolazascrap.com/blog/izkupuvane-na-koli-za-brakuvane/" target="_blank" rel="noopener noreferrer">
                  <strong>изкупуване на коли за скрап</strong>
                </a>{" "}
                и какво трябва да знаете.
              </p>
              <Link
                href="/blog/izkupuvane-na-koli-za-skrap"
                className={styles.card_link}
              >
                Прочети още
              </Link>
            </div>

            <div className={styles.card}>
              <Image
                src="/engine.webp"
                alt="engine replacement"
                width={1024}
                height={768}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
              <Link href="/blog/kogato-dvigatela-e-za-smyana" className={styles.card_title} aria-label="Когато двигателя е за смяна">Когато двигателя е за смяна</Link>
              <p className={styles.card_text}>
                Полезни съвети{" "}
                <a href="https://carco.bg/blog/smiana-na-povreden-dvigatel" target="_blank" rel="noopener noreferrer">
                  <strong>когато двигателя е за смяна</strong>
                </a>
                . Кога се налага смяна, как да изберете надежден двигател втора
                употреба.
              </p>
              <Link
                href="/blog/kogato-dvigatela-e-za-smyana"
                className={styles.card_link}
              >
                Прочети още
              </Link>
            </div>

            <div className={styles.card}>
              <Image
                src="/gearbox.webp"
                alt="gearbox repair"
                width={1024}
                height={768}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
              <Link href="/blog/priznaci-na-povreda-skoresna-kutiya" className={styles.card_title} aria-label="Признаци на повредена скоростна кутия">
                Признаци на повредена скоростна кутия
              </Link>
              <p className={styles.card_text}>
                Полезни съвети разпознайте признаци на{" "}
                <a href="https://carco.bg/blog/skorostna-kutiya-vtora-raka" target="_blank" rel="noopener noreferrer">
                  <strong>повредена скоростна кутия</strong>
                </a>
                . Как да разбете дали проблема е в скоростната кутия, а не в
                съединителя.
              </p>
              <Link
                href="/blog/priznaci-na-povreda-skoresna-kutiya"
                className={styles.card_link}
              >
                Прочети още
              </Link>
            </div>

            <div className={styles.card}>
              <Image
                src="/calculator.webp"
                alt="коли за скрап калкулатор"
                width={1024}
                height={768}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
              <Link href="/blog/kak-raboti-koli-za-skrap-kalkulatora" className={styles.card_title} aria-label="Как работи коли за скрап калкулатора">
                Как работи коли за скрап калкулатора
              </Link>
              <p className={styles.card_text}>
                Въведете марка, модел и местонахождение и веднага разберете{" "}
                <a href="https://kolazascrap.com/blog/online-otsenka-na-kola-za-scrap/" target="_blank" rel="noopener noreferrer">
                  <strong>колко струва колата ви за скрап</strong>
                </a>
                .
              </p>
              <Link
                href="/blog/kak-raboti-koli-za-skrap-kalkulatora"
                className={styles.card_link}
              >
                Прочети още
              </Link>
            </div>

            <div className={styles.card}>
              <Image
                src="/koli-za-chasti.webp"
                alt="изкупуване на коли за части"
                width={1024}
                height={768}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
              <Link href="/blog/izkupuvane-na-koli-za-chasti" className={styles.card_title} aria-label="Изкупуване на коли за части – честно за цените">
                Изкупуване на коли за части – честно за цените
              </Link>
              <p className={styles.card_text}>
                Кога има смисъл{" "}
                <a href="https://carco.bg/blog/izkupuvane-na-koli-za-chasti" target="_blank" rel="noopener noreferrer">
                  <strong>продажба на кола за части</strong>
                </a>
                {" "}и защо инвестицията в ремонти не увеличава стойността на автомобила.
              </p>
              <Link
                href="/blog/izkupuvane-na-koli-za-chasti"
                className={styles.card_link}
              >
                Прочети още
              </Link>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}
