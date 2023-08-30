import Image from "next/image";
import styles from "./page.module.css";

import IronMan from "../../public/iron.jpg";
import Woman from "../../public/woman.jpg";
import Ok from "../../public/ok.jpg";
import Catuni2 from "../../public/catuni2.jpg";
import Catuni3 from "../../public/catuni3.jpg";

import Cartoon from "../../public/cartoon.jpg";
import movie from "../../public/movie.jpg";

export default function Home() {
  return (
    <div>
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

            <Image className={styles.image} src={Woman} width={200} />
          </section>
        </div>
      </hero>

      <div className={styles.container}>
        <div className={styles.vngs}>
          <div className={styles.vngs__vision}>
            <div className={styles.vngs__vision_content}>
              <h3 data-aos="flip-up" className={styles.h3}>
                VISION
              </h3>
              <p className={styles.p}>
                To bring 3d and 2d artists, animators, cartoonists, film
                producers, directors, graphic designers, videographers, video
                editors, script writers etc. together so that they can work and
                corroborate to make movies, animation while improving their
                skills and learning from each other
              </p>

              <p className={styles.p}>
                To improve film and animation production industry in Malawi
                through networking and teamwork
              </p>
            </div>

            <div className={styles.vngs__vision_image}>
              <Image
                data-aos="zoom-in"
                className={styles.vngs__vision_img}
                src={Cartoon}
                width={210}
              />
            </div>
          </div>

          <div className={styles.vngs__vision}>
            <div className={styles.vngs__vision_image}>
              <Image
                data-aos="zoom-in"
                className={styles.vngs__vision_img}
                src={movie}
                width={200}
              />
            </div>

            <div className={styles.vngs__vision_content}>
              <h3 data-aos="flip-up" className={styles.h3}>
                GOALS
              </h3>
              <p className={styles.p}>
                To produce movies and animation, cartoon that will broadcasted
                at the university of Malawi and across country and the globe.
              </p>

              <p className={styles.p}>
                To produce a short film each year and by 2026 it should produce
                a movie or animation with worldwide standard that will be
                broadcasted in theaters and across the country and it will be
                recognized in worldwide
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
