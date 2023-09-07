import React from "react";

import img1 from "../../../../../public/pic 3.jpeg";
import img2 from "../../../../../public/ok.jpg";
import img3 from "../../../../../public/cartoon.jpg";
import img4 from "../../../../../public/woman.jpg";

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
  return <div>{image.desc}</div>;
}

export default page;
