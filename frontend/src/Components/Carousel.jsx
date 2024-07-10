import React, { useState, useEffect } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

import "./Carousel.css";

export const Carousel = ({ data }) => {
  const [slide, setSlide] = useState(0);
  const [animating, setAnimating] = useState(false);

  const nextSlide = () => {
    if (!animating) {
      setAnimating(true);
      setSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1));
    }
  };

  const prevSlide = () => {
    if (!animating) {
      setAnimating(true);
      setSlide((prev) => (prev === 0 ? data.length - 1 : prev - 1));
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => setAnimating(false), 500);
    return () => clearTimeout(timer);
  }, [slide]);

  return (
    <div className="carousel">
      <BsArrowLeftCircleFill onClick={prevSlide} className="arrow arrow-left" />
      {data.map((item, idx) => {
        return (
          <img
            src={item.src}
            alt={item.alt}
            key={idx}
            className={`slide ${
              slide === idx ? "slide-active" : "slide-hidden"
            }`}
          />
        );
      })}
      <BsArrowRightCircleFill
        onClick={nextSlide}
        className="arrow arrow-right"
      />
      <span className="indicators">
        {data.map((_, idx) => {
          return (
            <button
              key={idx}
              className={`indicator ${
                slide === idx ? "indicator-active" : "indicator-inactive"
              }`}
              onClick={() => {
                if (!animating) {
                  setAnimating(true);
                  setSlide(idx);
                }
              }}
            ></button>
          );
        })}
      </span>
    </div>
  );
};
