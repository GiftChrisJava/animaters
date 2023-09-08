import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./vid.module.css";

import thumbnail1 from "../../../../public/thumbnail1.png";
import thumbnail2 from "../../../../public/thumbnail2.png";
import thumbnail3 from "../../../../public/thumbnail3.png";
import thumbnail4 from "../../../../public/thumbnail4.png";
import thumbnail5 from "../../../../public/thumbnail5.png";
import thumbnail6 from "../../../../public/thumbnail6.png";
import thumbnail7 from "../../../../public/thumbnail7.png";

const videos = [
  {
    id: 1,
    artist: "Haywood Liuma Java",
    alt: "artwork",
    url: "",
    desc: "Short film about our works and various projects",
    thumbnailURL: thumbnail1,
  },

  {
    id: 2,
    artist: "James Kaonga",
    alt: "artwork",
    url: "",
    desc: "Short film about our works and various projects",
    thumbnailURL: thumbnail2,
  },
  {
    id: 5,
    artist: "Mayamiko Juma",
    alt: "artwork",
    url: "",
    desc: "Short film about our works and various projects",
    thumbnailURL: thumbnail5,
  },

  {
    id: 3,
    artist: "Caleb Clouds",
    alt: "artwork",
    url: "",
    desc: "Short film about our works and various projects",
    thumbnailURL: thumbnail3,
  },

  {
    id: 4,
    artist: "Sizothini",
    alt: "artwork",
    url: "",
    desc: "Short film about our works and various projects",
    thumbnailURL: thumbnail4,
  },

  {
    id: 7,
    artist: "James Kaonga",
    alt: "artwork",
    url: "",
    desc: "Short film about our works and various projects",
    thumbnailURL: thumbnail7,
  },

  {
    id: 6,
    artist: "James Kaonga",
    alt: "artwork",
    url: "",
    desc: "Short film about our works and various projects",
    thumbnailURL: thumbnail6,
  },
];

const Thumbnails = () => {
  return (
    <div className={styles.list_container}>
      {videos.map((video) => (
        <div key={video.id} className={styles.vid_list}>
          <Link href={`/gallery/videos/${video.id}`} className={styles.a}>
            <Image
              src={video.thumbnailURL}
              className={styles.thumbnail}
              alt={video.alt}
            />
          </Link>

          <h4 className={styles.h4}>{video.desc}</h4>
        </div>
      ))}
    </div>
  );
};

export default Thumbnails;
