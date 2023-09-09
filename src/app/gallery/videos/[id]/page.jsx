"use client";
import React from "react";
import Image from "next/image";

//import { CldVideoPlayer } from "next-cloudinary";
import styles from "./page.module.css";

import { AiFillHeart } from "react-icons/ai";

import thumbnail1 from "../../../../../public/thumbnail1.png";
import thumbnail2 from "../../../../../public/thumbnail2.png";
import thumbnail3 from "../../../../../public/thumbnail3.png";
import thumbnail4 from "../../../../../public/thumbnail4.png";
import thumbnail5 from "../../../../../public/thumbnail5.png";
import thumbnail6 from "../../../../../public/thumbnail6.png";
import thumbnail7 from "../../../../../public/thumbnail7.png";

import video from "../../../../../public/video.mp4";

const videos = [
  {
    id: 1,
    artist: "Haywood Liuma Java",
    alt: "artwork",
    url: video,
    desc: "Short film about our works and various projects Short film about our works and various projects",
    thumbnailURL: thumbnail1,
  },

  {
    id: 2,
    artist: "James Kaonga",
    alt: "artwork",
    url: video,
    desc: "Short film about our works and various projects Short film about our works and various projects",
    thumbnailURL: thumbnail2,
  },
  {
    id: 5,
    artist: "Mayamiko Juma",
    alt: "artwork",
    url: video,
    desc: "Short film about our works and various projects Short film about our works and various projects",
    thumbnailURL: thumbnail5,
  },

  {
    id: 3,
    artist: "Caleb Clouds",
    alt: "artwork",
    url: video,
    desc: "Short film about our works and various projects Short film about our works and various projects",
    thumbnailURL: thumbnail3,
  },

  {
    id: 4,
    artist: "Sizothini",
    alt: "artwork",
    url: video,
    desc: "Short film about our works and various projects Short film about our works and various projects",
    thumbnailURL: thumbnail4,
  },

  {
    id: 7,
    artist: "James Kaonga",
    alt: "artwork",
    url: video,
    desc: "Short film about our works and various projects Short film about our works and various projects",
    thumbnailURL: thumbnail7,
  },

  {
    id: 6,
    artist: "James Kaonga",
    alt: "artwork",
    url: video,
    desc: "Short film about our works and various projects Short film about our works and various projects",
    thumbnailURL: thumbnail6,
  },
];

export default function Page({ params }) {
  const video = videos.find((vid) => vid.id == params.id);

  return (
    <div>
      <div className={styles.play_container}>
        <div className={styles.row}>
          <div className={styles.play_video}>
          
		
		<video controls>
            <source src="../../../../../public/video.mp4" type="video/mp4" alt="video"/>
          </video>

            <div className={styles.play_vid_info}>
              <span className={styles.span}>
                <AiFillHeart className={styles.img} />
                125
              </span>
            </div>

            <p className={styles.vd_desc}>{video.desc}</p>

            <form className={styles.form}>
              <div className={styles.subscription__form}>
                <input
                  className={styles.input}
                  type="text"
                  name="user"
                  id="user"
                  required
                  placeholder="Type your name"
                />
              </div>

              <div className={styles.subscription__form}>
                <input
                  className={styles.input_comment}
                  type="text"
                  name="comment"
                  required
                  id="comment"
                  placeholder="Type a short comment here"
                />
                <button type="submit" className={styles.submit__btn}>
                  Add
                </button>
              </div>
            </form>

            <div className={styles.comment_container}>
              <div className={styles.old_comment}>
                <div>
                  <h3 className={styles.comment_small}>Jack Nicholas</h3>

                  <p>
                    A global computer networking providing a variety and
                    communication facilities, constisting of interconnected
                    networks using standard networking tools
                  </p>
                </div>
              </div>

              <div className={styles.old_comment}>
                <div>
                  <h3 className={styles.comment_small}>Jack Nicholas</h3>

                  <p>
                    A global computer networking providing a variety and
                    communication facilities, constisting of interconnected
                    networks using standard networking tools
                  </p>
                </div>
              </div>

              <div className={styles.old_comment}>
                <div>
                  <h3 className={styles.comment_small}>Jack Nicholas</h3>

                  <p>
                    A global computer networking providing a variety and
                    communication facilities, constisting of interconnected
                    networks using standard networking tools
                  </p>
                </div>
              </div>

              <div className={styles.old_comment}>
                <div>
                  <h3 className={styles.comment_small}>Jack Nicholas</h3>

                  <p>
                    A global computer networking providing a variety and
                    communication facilities, constisting of interconnected
                    networks using standard networking tools
                  </p>
                </div>
              </div>

              <div className={styles.old_comment}>
                <div>
                  <h3 className={styles.comment_small}>Jack Nicholas</h3>

                  <p>
                    A global computer networking providing a variety and
                    communication facilities, constisting of interconnected
                    networks using standard networking tools
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
