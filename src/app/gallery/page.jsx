import React from "react";
import Link from "next/link";
import styles from "./page.module.css"; // Make sure to import the correct CSS module

const ArtGallery = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.gallery_choose_gallery}>Choose a gallery</h1>
      <div className={styles.gallery__items} data-aos="zoom-in">
        <Link href="/gallery/artworks" className={styles.item}>
          <span className={styles.title}>Artworks</span>
        </Link>

        <Link href="/gallery/videos" className={styles.item}>
          <span className={styles.title}>Videos</span>
        </Link>
      </div>
    </div>
  );
};

export default ArtGallery;
