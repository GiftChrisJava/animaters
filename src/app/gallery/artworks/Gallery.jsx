import React from "react";
import styles from "./art.module.css";
import Image from "next/image";

import { AiFillLike } from "react-icons/ai";

import img1 from "../../../../public/pic 3.jpeg";
import img2 from "../../../../public/ok.jpg";
import img3 from "../../../../public/cartoon.jpg";
import img4 from "../../../../public/woman.jpg";

const images = [
  {
    id: 1,
    artist: "James Kaonga",
    alt: "artwork",
    url: img1,
    desc: "Pencil artwork",
  },

  {
    id: 2,
    artist: "James Kaonga",
    alt: "artwork",
    url: img2,
    desc: "Pencil artwork",
  },
  {
    id: 5,
    artist: "James Kaonga",
    alt: "artwork",
    url: img4,
    desc: "Pencil artwork",
  },

  {
    id: 3,
    artist: "James Kaonga",
    alt: "artwork",
    url: img3,
    desc: "Pencil artwork",
  },

  {
    id: 4,
    artist: "James Kaonga",
    alt: "artwork",
    url: img4,
  },

  {
    id: 7,
    artist: "James Kaonga",
    alt: "artwork",
    url: img1,
    desc: "Pencil artwork",
  },

  {
    id: 6,
    artist: "James Kaonga",
    alt: "artwork",
    url: img2,
  },

  {
    id: 8,
    artist: "James Kaonga",
    alt: "artwork",
    url: img1,
    desc: "Pencil artwork",
  },
];

export const Gallery = () => {
  return (
    <div className={styles.gallery}>
      <div className={styles.images}>
        {images.map((image) => (
          <div key={image.id} className={styles.image_card}>
            <Image src={image.url} alt={image.alt} className={styles.img} />

            <div className={styles.details}>
              <small>click image to commment and like</small>
            </div>

            <div className={styles.image_info}>
              <p className={styles.image_desc}>By {image.artist}</p>
              <h3>{image.desc}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
