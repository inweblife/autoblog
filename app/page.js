import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

import styles from "./page.module.css";

export const metadata = {
  title: "Autoblog | Новини за коли",
  description: "Новини за автомобили, авточасти и бракуване на коли",
};

export default function Home() {
  return (
    <>
      {/* cover */}
      <Head><meta name="google-site-verification" content="sfRPcXRVIhRKjhZZpZq4w-Z2eWaHcXE8C-G-Ntxkrd0" /></Head>
      <main className={styles.container}>
        <div className={styles.cover}>
          <h1 className={styles.title}>Autoblog - новини за коли</h1>
        </div>

        {/* content */}

        <section className={styles.section}>
          <h2 className={styles.section_title}>Новини от света на колите</h2>
          <p className={styles.section_text}>
            Тук ще откриете информация за всичко, що се отнася до автомобилите -
            от най-новите модели и технологии до практични съвети за поддръжка и
            ремонт
          </p>

          <h3 className={styles.section_title}>Добре дошли в Автоблог!</h3>

          <p className={styles.section_text}>
            В този раздел ще ви запознаем с най-актуалните новини от
            автомобилната индустрия. Ще разгледаме нови модели, предстоящи
            събития, интересни технологии, както и важни промени в
            законодателството.
          </p>

          <h3 className={styles.section_title}>Бракуване на коли</h3>

          <p className={styles.section_text}>
            За съжаление, не всички автомобили могат да бъдат ремонтирани. За
            тези, които са достигнали края на своя жизнен цикъл, е необходимо да
            се предприеме бракуване. В този раздел ще ви запознаем с процеса на
            бракуване на автомобили, както и с различните възможности за
            рециклиране на части.
          </p>

          <h3 className={styles.section_title}>
            Какво можете да очаквате от Автоблог:
          </h3>

          <p className={styles.section_text}>
            Подробни новини и анализи за най-новите модели, технологии и събития
            в автомобилния свят. Практични съвети и ръководства за поддръжка,
            ремонт и подобрение на вашия автомобил. Информация за бракуване на
            коли, включително процеса, необходимите документи и възможностите за
            рециклиране. Форум за дискусии, където можете да задавате въпроси,
            да споделяте опит и да обсъждате теми, свързани с автомобилите.
          </p>

          <h3 className={styles.section_title}>Присъединете се към нас!</h3>

          <p className={styles.section_text}>
            Следете Автоблог, за да сте в крак с най-новите новини от света на
            колите. 
          </p>
          
        </section>
      </main>
    </>
  );
}
