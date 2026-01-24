import { useEffect, useState } from "react";
import "../styles/banner.css";

import b1 from "../assets/banner/banner1.jpg";
import b2 from "../assets/banner/banner2.jpg";
import b3 from "../assets/banner/banner3.jpg";
import b4 from "../assets/banner/banner4.jpg";
import b5 from "../assets/banner/banner5.jpg";

const images = [b1, b2, b3, b4, b5];

export default function Banner() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setIndex(index === 0 ? images.length - 1 : index - 1);
  };

  const nextSlide = () => {
    setIndex((index + 1) % images.length);
  };

  return (
    <div className="banner">
      <img src={images[index]} alt="banner" className="banner-img" />

      <button className="arrow left" onClick={prevSlide}>
        ❮
      </button>
      <button className="arrow right" onClick={nextSlide}>
        ❯
      </button>
    </div>
  );
}
