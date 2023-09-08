import React from "react";

import img1 from "../../../../../public/pic 3.jpeg";
import img2 from "../../../../../public/ok.jpg";
import img3 from "../../../../../public/cartoon.jpg";
import img4 from "../../../../../public/woman.jpg";

import styles from "./page.module.css";

import { AiFillLike } from "react-icons/ai";

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

function page({ params }) {
  const image = images.find((img) => img.id == params.id);
  return (
    <div>
      <div className={styles.main_container}>
        <div className={styles.image_desc_container}>
          <div className={styles.image_like_wrapper}>
            <Image className={styles.img} src={image.url} alt="artwork" />

            <div className={styles.icon_like_wrapper}>
              <AiFillLike className={styles.heart} />
              <h5 className={styles.numb}>120</h5>
            </div>
          </div>

          <div className={styles.form_image_desc_container}>
            <div className={styles.image_descriptions}>
              <h3 className={styles.h3}>About Image</h3>
              <h4 className={styles.h4}>{image.desc}</h4>
              <p className={styles.image_about}>
                Asperiores, animi aliquid nemo cum nisi soluta excepturi error,
                dolor beatae dolores at ipsam eos reprehenderit, odio veritatis
                velit! Atque, quasi odio.
              </p>
              <small className={styles.artist_name}>By {image.artist}</small>
            </div>

            <form className={styles.form}>
              <div className={styles.subscription__form}>
                <input
                  className={styles.input}
                  type="text"
                  name="user"
                  id="user"
                  placeholder="Type your name"
                />
              </div>

              <div className={styles.subscription__form}>
                <input
                  className={styles.input_comment}
                  type="text"
                  name="comment"
                  id="comment"
                  placeholder="Type a short comment here"
                />
                <button type="submit" className={styles.submit__btn}>
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
        <h3 className={styles.comment_h3}>Comments</h3>

        <div className={styles.comments_container} id="comments_container">
          <div className={styles.comment}>
            <small className={styles.comment_small}>John Masamba</small>
            <h4 className={styles.comment_h4}>hhshs shss hs shhhss</h4>
          </div>

          <div className={styles.comment}>
            <small className={styles.comment_small}>John Masamba</small>
            <h4 className={styles.comment_h4}>hhshs shss hs shhhss</h4>
          </div>

          <div className={styles.comment}>
            <small className={styles.comment_small}>John Masamba</small>
            <h4 className={styles.comment_h4}>hhshs shss hs shhhss</h4>
          </div>

          <div className={styles.comment}>
            <small className={styles.comment_small}>John Masamba</small>
            <h4 className={styles.comment_h4}>hhshs shss hs shhhss</h4>
          </div>

          <div className={styles.comment}>
            <small className={styles.comment_small}>John Masamba</small>
            <h4 className={styles.comment_h4}>hhshs shss hs shhhss</h4>
          </div>

          <div className={styles.comment}>
            <small className={styles.comment_small}>John Masamba</small>
            <h4 className={styles.comment_h4}>hhshs shss hs shhhss</h4>
          </div>

          <div className={styles.comment}>
            <small className={styles.comment_small}>John Masamba</small>
            <h4 className={styles.comment_h4}>hhshs shss hs shhhss</h4>
          </div>

          <div className={styles.comment}>
            <small className={styles.comment_small}>John Masamba</small>
            <h4 className={styles.comment_h4}>hhshs shss hs shhhss</h4>
          </div>

          <div className={styles.comment}>
            <small className={styles.comment_small}>John Masamba</small>
            <h4 className={styles.comment_h4}>hhshs shss hs shhhss</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
