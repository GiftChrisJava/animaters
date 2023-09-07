import React from "react";
import styles from "./page.module.css";

import { FiTarget } from "react-icons/fi";

function Mission() {
  return (
    <div className={styles.container}>
      <h2 className={styles.mission__title} data-aos="fade-left">
        INSIDE OUR MISSION
      </h2>

      <div className={styles.mission__container}>
        <div className={styles.mission__content} data-aos="zoom-in">
          <h4 className={styles.subtitle}>
            Amplifying Advocacy Through Art
            <span className={styles.span}>
              <FiTarget data-aos="zoom-in" />
            </span>
          </h4>

          <p className={styles.description}>
            With unwavering dedication, we will channel the expressive power of
            animation and cartoons to champion causes that deserve attention.
            Our mission propels us to give voice to those whose stories need to
            be heard. Through captivating visuals and compelling storytelling,
            we strive to raise awareness, spark conversations, and drive action
            on critical issues that define our times
          </p>
        </div>

        <div className={styles.mission__content} data-aos="zoom-in">
          <h4 className={styles.subtitle}>
            Entertaining With Purpose
            <span className={styles.span}>
              <FiTarget data-aos="zoom-in" />
            </span>
          </h4>

          <p className={styles.description}>
            Entertainment takes on a new dimension within our mission. We
            embrace the responsibility of weaving tales that not only captivate
            but also resonate deeply. Each animation, each cartoon, is an
            opportunity to inspire joy, wonder, and reflection. Our commitment
            is to provide entertainment that enriches hearts and minds, leaving
            a lasting impact beyond the screen
          </p>
        </div>

        <div className={styles.mission__content} data-aos="zoom-in">
          <h4 className={styles.subtitle}>
            Celebrating Culture Through Animation
            <span className={styles.span}>
              <FiTarget data-aos="zoom-in" />
            </span>
          </h4>

          <p className={styles.description}>
            Our mission is to celebrate and preserve Malawian culture by using
            animation and cartoons to unearth forgotten stories, revive fading
            traditions, and ignite a cultural renaissance that bridges
            generations and inspires a global appreciation for the
            nation&rsquo;s rich heritage
          </p>
        </div>

        <div className={styles.mission__content} data-aos="zoom-in">
          <h4 className={styles.subtitle}>
            Creativity That Catalyzes Change
            <span className={styles.span}>
              <FiTarget data-aos="zoom-in" />
            </span>
          </h4>

          <p className={styles.description}>
            Our mission extends beyond the creation of animations and cartoons.
            We are catalysts for a creative revolution that ignites positive
            transformation. Through our collective artistic endeavours, we
            strive to be agents of change, influencing societal perceptions,
            advancing causes, and fostering unity among people of all
            backgrounds
          </p>
        </div>
      </div>
    </div>
  );
}

export default Mission;
