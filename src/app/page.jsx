import Image from "next/image";
import styles from "./page.module.css";

import Gita from "../../public/gita.jpg";
import IronMan from "../../public/iron.jpg";
import Woman from "../../public/woman.jpg";
import Ok from "../../public/ok.jpg";
import Catuni2 from "../../public/catuni2.jpg";
import Catuni3 from "../../public/catuni3.jpg";

export default function Home() {
  return (
    <hero className={styles.hero}>
      <div className={styles.hero__content}>
        <h2 className={styles.h2} data-aos="fade-left">
          CARTOONIST AND ANIMATOR’S SOCIETY
        </h2>

        <div className={styles.hero__mission}>
          <p className={styles.hero__mission_statement}>
            Promoting culture, advocacy and entertainment through cartoon and
            animation production
          </p>

          <button className={styles.hero__mission_btn} data-aos="fade-up">
            Our mission
            <img
              className={styles.hero__mission_img}
              src="arrow-up-right.svg"
              alt="arrow-right"
            />
          </button>
        </div>
      </div>

      <div className={styles.hero__images}>
        <section className={styles.section}>
          <Image src={Ok} width={150} />

          <Image className={styles.image} src={IronMan} width={160} />

          <Image src={Catuni2} width={100} />
        </section>

        <section className={styles.section}>
          <Image src={Catuni3} width={200} />

          <Image
            data-aos="slide-left"
            className={styles.image}
            src={Woman}
            width={200}
          />
        </section>
      </div>
    </hero>
  );
}
