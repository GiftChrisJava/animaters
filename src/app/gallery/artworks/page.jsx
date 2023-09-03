import React from "react";
import styles from "./art.module.css";
import { Gallery } from "./Gallery";

export default function Artworks() {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Artworks</h1>
      <Gallery />
    </div>
  );
}
