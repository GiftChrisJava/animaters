import React from "react";
import styles from "./navbar.module.css";

export const Navbar = () => {
  return (
    <header>
      <nav className={styles.header__nav}>
        <div className={styles.header__logo}>
          <h4 className={styles.h4}>UCAS</h4>
        </div>

        <ul className={styles.header__menu}>
          <li className={styles.li}>
            <a href="#home">Home</a>
          </li>

          <li className={styles.li}>
            <a href="#activities">Activities</a>
          </li>

          <li className={styles.li}>
            <a href="#mission">Mission</a>
          </li>

          <li className={styles.li}>
            <a href="#gallery">Gallery</a>
          </li>

          <li className={styles.li}>
            <a href="#about-us">About Us</a>
          </li>
        </ul>

        <ul className={styles.header__menu_mobile}>
          <li className={styles.li}></li>
        </ul>
      </nav>
    </header>
  );
};
