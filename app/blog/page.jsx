import Image from "next/image";
import Link from "next/link";

import styles from "./blog.module.css";

export const metadata = {
  title: "Блог за коли | Autoblog",
  description:
    "Тук ще намерите отговорите на всички въпроси, свързани с ремонти на автомобили, авточасти втора употреба и бракуване на стари коли.",
  openGraph: {
    title: "Блог за коли | Autoblog",
    description:
      "Тук ще намерите отговорите на всички въпроси, свързани с ремонти на автомобили, авточасти втора употреба и бракуване на стари коли.",
    url: "https://autoblog-bg.netlify.app/blog/",
    type: "website",
    images: [
      {
        url: "https://autoblog-bg.netlify.app/blog.webp",
        width: 800,
        height: 600,
        alt: "a car to be scrapped",
      },
    ],
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
              <h3 className={styles.card_title}>
                Колко струва кола за бракуване
              </h3>
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
              <h3 className={styles.card_title}>
                Документи за да бракувате кола
              </h3>
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
              <h3 className={styles.card_title}>
                Как да подготвя кола за бракуване
              </h3>
              <p className={styles.card_text}>
                Полезни съвети и стъпки за правилна подготовка на{" "}
                <strong>автомобил за бракуване</strong>.
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
              <h3 className={styles.card_title}>
                Изкупуване на коли за скрап
              </h3>
              <p className={styles.card_text}>
                Как работи процесът на изкупуване на коли за скрап и какво трябва
                да знаете.
              </p>
              <Link
                href="/blog/izkupuvane-na-koli-za-skrap"
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
