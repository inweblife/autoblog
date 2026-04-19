import Link from "next/link";

import styles from "./documenti.module.css";

export const metadata = {
  title: "Документи за да бракувате кола",
  description: "Какви са всички необходими документи, за да бракувате кола",
  alternates: {
    canonical: "https://autoblog-bg.netlify.app/blog/documenti-za-da-brakuvate-kola",
  },
  openGraph: {
    title: "Документи за да бракувате кола",
    description: "Какви са всички необходими документи, за да бракувате кола",
    url: "https://autoblog-bg.netlify.app/blog/documenti-za-da-brakuvate-kola",
    siteName: "Autoblog",
    locale: "bg_BG",
    type: "article",
    images: [
      {
        url: "https://autoblog-bg.netlify.app/documenti.webp",
        width: 800,
        height: 600,
        alt: "Документи за бракуване на кола",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Документи за да бракувате кола",
    description: "Какви са всички необходими документи, за да бракувате кола",
    images: ["https://autoblog-bg.netlify.app/documenti.webp"],
  },
};

export default function Documenti() {
  const publishDate = "6 февруари 2026";
  const readingTime = "4 мин.";

  return (
    <>
      <nav className={styles.breadcrumb}>
        <Link href="/blog">Блог</Link>
        <span>/</span>
        <span>Документи за да бракувате кола</span>
      </nav>

      <main className={styles.container}>
        <div className={styles.cover}>
          <h1 className={styles.title}>Документи за да бракувате кола</h1>
        </div>
      </main>

      <div className={styles.post_meta}>
        <span className={styles.meta_item}>
          <span className={styles.meta_icon}>📅</span>
          {publishDate}
        </span>
        <span className={styles.meta_item}>
          <span className={styles.meta_icon}>⏱️</span>
          {readingTime}
        </span>
      </div>

      <section className={styles.section}>
        <h2 className={styles.section_title}>Документи за да бракувате кола</h2>
        <p className={styles.section_text}>
          Какви са необходимите{" "}
          <a href="https://kolazascrap.com/blog/documenti-za-brakuvane-na-kola/" target="_blank" rel="noopener noreferrer">
            <strong>документи за да бракувате кола?!</strong>
          </a>{" "}
          Това е първият въпрос, който идва на ум на всеки, който е решил, че е
          дошло времето да рециклира стария си автомобил. Объркването идва от
          там, че всъщност в този въпрос се състоят цели две процедури - едната
          е свързана с <a href="https://ecometal.bg/blog/kak-se-prodava-kola-za-brakuvane/" target="_blank" rel="noopener noreferrer"><strong>продажбата на кола за бракуване. </strong></a>
          А втората - с 
          <a href="https://kolazascrap.com/blog/kakav-e-srokat-za-otpisvane-na-kola-ot-kat/" target="_blank" rel="noopener noreferrer"><strong> отписването на колата от КАТ</strong></a>, където се сваля от отчет и се маха от
          общината.
        </p>

        <p className={styles.section_text}>
          Доста хора си мислят, че е достатъчно да върнат стария автомобил на
          вторични суровини и това е всичко. Обаче, това далеч не е вярно.
          Дерегистрацията на моторно превозно средство става по строго спазвана
          процедура, за да бъде свалено от отчет от името на собственика. Затова
          и в тази публикация ще се опитаме максимално подробно да разкажем
          всичко около процедурата по бракуване на автомобил.
        </p>

        <h2 className={styles.section_title}>
          Може ли да продадете кола без документи
        </h2>

        <p className={styles.section_text}>
          Продажбата на превозно средство без документи законно е невъзможна. За
          да извършите, каквато и да било търговска сделка с автомобил, е
          необходимо да притежавате големия и малкия талон - свидетелство за
          регистрация 1 и 2. Ако продавате колата на нов собственик или купувате
          такава, то трябва да представите документи за покупко-продажба, за да
          бъде вписан новия собственик. И, за да се удостовери настоящия.
        </p>

        <p className={styles.section_text}>
          По същия начин, без документи за колата, съответно - талоните, няма
          как да бъде и бракувано превозно средство. Затова и най-големият
          проблем пред собствениците е, когато са загубили талоните. Няма друго
          решение, освен да се посети най-близкия офис на КАТ, откъдето да се
          извадят нови, с които вече могат да бъдат извършвани всякакви други
          сделки.
        </p>

        <h2 className={styles.section_title}>
          Документи за продажба на кола за скрап
        </h2>

        <p className={styles.section_text}>
          Продажба на автомобил за скрап може да бъде извършена от всеки, който
          може да представи малък или голям талон. Свалят се номерата и се
          попълват документи. В документите за предаване на колата в център за
          рециклиране, се записват данните на лицето, което връща автомобила по
          лична карта. Затова и сделка с лицензиран търговец на коли за скрап
          може да бъде осъществена и при липсата на собственика.
        </p>

        <p className={styles.section_text}>
          Обръщаме внимание да пазите талоните на автомобила си на сигурно
          място, за да не бъде пресниман някой от двата талона от някой
          недобросъвестен човек, който по-късно да бракува автомобила без
          знанието на собственика. Има много такива случаи, особено при
          разделени двойки, скарани роднини и др. По-късно собственикът и да
          подаде молба до полицията, че някой е злоупотребил с автомобила, който
          е на негово име, всичко е приключило вече. Превозното средство отдавна
          е рециклирано и няма връщане назад.
        </p>

        <h2 className={styles.section_title}>
          Документи за прекратяване на регистрацията
        </h2>

        <p className={styles.section_text}>
          Прекратяването на регистрацията в КАТ става само лично от собственика
          на автомобила. Трябва да представи лична карта, за да се легитимира,
          свидетелство за регистрация е 1 и 2 - големия и малкия талон,
          заявление за прекратяване на регистрацията и документ, че автомобилът
          е предаден на рециклираща компания. В случай, че няма удостоверение за
          дерегистрация, собственикът декларира, че ще съхранява превозното
          средство в частен имот
        </p>

        <p className={styles.section_text}>
          Заплаща се минимална такса за прекратяване на регистрацията и
          автомобила се сваля от регистрите на КАТ. Тъй като вече има
          автоматична система, би следвало и да бъде отписан от общината, за да
          не текат повече данъци за него. Разбира се, най-добре е собственикът
          лично да се увери в това, за да няма неприятни изненади. Имайте
          предвид, че отписването от КАТ е хубаво да се извърши преди края на
          календарната година, за да не бъде таксувано излязлото от употреба
          превозно средство за следващата.
        </p>

        <nav className={styles.navigation}>
          <Link href="/blog/kolko-struva-kola-za-brakuvane" className={styles.nav_link}>
            ← Предишен пост
          </Link>
          <Link href="/blog/" className={styles.nav_link}>
            Всички постове
          </Link>
          <Link href="/blog/kak-da-podgotvya-kola-za-brakuvane" className={styles.nav_link}>
            Следващ пост →
          </Link>
        </nav>
      </section>
    </>
  );
}
