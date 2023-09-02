import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

import Create from "../../../public/create.jpg";
import { AiFillCloseCircle } from "react-icons/ai";

function Activities() {
  return (
    <div className={styles.container_main}>
      <div className={styles.container_inner}>
        <div className={styles.activity__header}>
          <h1 className={styles.activity__header_h1}>
            Some Of The Activities Of the Society
          </h1>

          <div className={styles.activity__header_img}>
            <Image className={styles.img} src={Create} data-aos="zoom-in" />
          </div>
        </div>

        <div className={styles.activities_container}>
          <div className={styles.activity__container}>
            <h4 className={styles.activity__title}>1. Drawing Sessions</h4>

            <p className={styles.activity__desc}>
              Arrange regular drawing sessions where members can practice their
              sketching skills and share techniques. Set themes or prompts to
              challenge their creativity
            </p>
          </div>
          <div className={styles.activity__container}>
            <h4 className={styles.activity__title}>
              2. Workshops and Tutorials
            </h4>

            <p className={styles.activity__desc}>
              Invite experienced artists or industry professionals to conduct
              workshops or give tutorials on various aspects of cartooning and
              animation, such as character design, storyboarding, or digital art
              tools
            </p>
          </div>
          <div className={styles.activity__container}>
            <h4 className={styles.activity__title}>3. Animation Challenges</h4>

            <p className={styles.activity__desc}>
              Organize animation challenges with specific constraints or themes.
              Members can create short animations individually or in teams,
              encouraging friendly competition and showcasing their talents.
            </p>
          </div>
          <div className={styles.activity__container}>
            <h4 className={styles.activity__title}>4. Critique Sessions</h4>

            <p className={styles.activity__desc}>
              Create a safe and supportive environment for members to receive
              constructive feedback on their artwork. Regular critique sessions
              which will help improve skills and encourage growth
            </p>
          </div>
          <div className={styles.activity__container}>
            <h4 className={styles.activity__title}>
              5. Collaborative Projects
            </h4>

            <p className={styles.activity__desc}>
              Initiate group projects where members work together on largerscale
              animations or comics. To foster teamwork, creative
              problem-solving, and provides an opportunity to learn from each
              other
            </p>
          </div>
          <div className={styles.activity__container}>
            <h4 className={styles.activity__title}>6. Guest Speakers</h4>

            <p className={styles.activity__desc}>
              Invite professionals from the animation or cartooning industry to
              share their experiences and insights. This will include animators,
              storyboard artists, voice actors, or even comic book illustrators
            </p>
          </div>
          <div className={styles.activity__container}>
            <h4 className={styles.activity__title}>
              7. Screenings and Discussions
            </h4>

            <p className={styles.activity__desc}>
              Organize screenings of animated films, TV shows, or short films
              followed by group discussions. Analyse techniques, storytelling
              methods, and the impact of animation on popular culture
            </p>
          </div>

          <div className={styles.activity__container}>
            <h4 className={styles.activity__title}>8. Comic Jams</h4>

            <p className={styles.activity__desc}>
              Host comic jams, where members take turns adding panels or pages
              to a collaborative comic. This improvisational exercise encourages
              quick thinking and adaptability
            </p>
          </div>

          <div className={styles.activity__container}>
            <h4 className={styles.activity__title}>
              9. Industry Visits & Field Trips
            </h4>

            <p className={styles.activity__desc}>
              Plan visits to animation studios, art exhibitions, or comic
              conventions to expose members to professional settings and
              networking opportunities.
            </p>
          </div>

          <div className={styles.activity__container}>
            <h4 className={styles.activity__title}>10. Online Presence</h4>

            <p className={styles.activity__desc}>
              Create a social media presence for the club to showcase members'
              artwork, share updates, and engage with a wider audience. This can
              include platforms like Instagram, Facebook, YouTube, or a
              dedicated website
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Activities;
