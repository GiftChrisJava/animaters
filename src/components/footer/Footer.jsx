import React from "react";
import styles from "./footer.module.css";
import Link from "next/link";

import { BsFacebook, BsWhatsapp, BsInstagram, BsTwitter } from "react-icons/bs";

import { MdEmail, MdMail, MdPhone } from "react-icons/md";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_content}>
        <ul className={styles.footer__menu}>
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

        <div className={styles.footer__contacts}>
          <div className={styles.footer__contact}>
            <MdPhone color="rgb(143, 61, 6)" className={styles.footer__icon} />
            <p className={styles.footer__p}>+265991486005</p>
          </div>

          <div className={styles.footer__contact}>
            <MdMail color="rgb(143, 61, 6)" className={styles.footer__icon} />
            <p className={styles.footer__p}>chrisjava77@gmail.com</p>
          </div>

          <div className={styles.footer__contact}>
            <MdPhone color="rgb(143, 61, 6)" className={styles.footer__icon} />
            <p className={styles.footer__p}>+265887036123</p>
          </div>
        </div>

        <div className={styles.footer__icons}>
          <BsFacebook
            fontSize={24}
            // color="white"
            className={styles.footer__icn}
          />
          <BsTwitter
            fontSize={24}
            // color="white"
            className={styles.footer__icn}
          />
          <BsWhatsapp
            fontSize={24}
            // color="white"
            className={styles.footer__icn}
          />
          <BsInstagram
            fontSize={24}
            // color="white"
            className={styles.footer__icn}
          />
        </div>
      </div>
    </footer>
  );
}
