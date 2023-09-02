import React from "react";
import styles from "./navbar.module.css";
import Link from "next/link";

export const Navbar = () => {
  return (
    <header>
      <nav className={styles.header__nav}>
        <div className={styles.header__logo}>
          <h4 className={styles.h4}>CAAS</h4>
        </div>

        <ul className={styles.header__menu}>
          <li className={styles.li}>
            <Link href="/">Home</Link>
          </li>

          <li className={styles.li}>
            <Link href="/activities">Activities</Link>
          </li>

          <li className={styles.li}>
            <Link href="/mission">Mission</Link>
          </li>

          <li className={styles.li}>
            <Link href="/gallery">Gallery</Link>
          </li>
        </ul>

        <ul className={styles.header__menu_mobile}>
          <li className={styles.li}></li>
        </ul>
      </nav>
    </header>
  );
};
