import Image from "next/image";
import Link from "next/link";

import styles from "./blog.module.css";

export const metadata = {
  title: "Блог за коли | Autoblog", 
  description: "Новини за автомобили, авточасти и бракуване на коли",
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
            В блога на Autoblog ще може да намерите всякакви интересни теми свързани с автомобилната индустрия.
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
            <h3 className={styles.card_title}>Колко струва кола за бракуване</h3>
            <p className={styles.card_text}>
              Колко струва кола за бракуване, как да спечелите повече.
             </p>   
             <Link href="/blog/kolko-struva-kola-za-brakuvane" className={styles.card_link}>Прочети още</Link>
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
            <h3 className={styles.card_title}>Документи за да бракувате кола</h3>
            <p className={styles.card_text}>
              Какви са всички необходими документи, за да бракувате кола
             </p>   
             <Link href="/blog/documenti-za-da-brakuvate-kola" className={styles.card_link}>Прочети още</Link>
          </div>
          </section>   
        </section>       
    </main>
    </>
  );
}
