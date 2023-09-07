import React from "react";
import styles from "./art.module.css";
import { Gallery } from "./Gallery";

export default function Artworks() {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Art In The Collection</h1>
      <Gallery />
    </div>
  );
}
