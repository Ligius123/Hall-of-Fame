import React, { useState } from "react";
import { SliderData } from "./SliderData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import classes from "./ImageSlider.module.css";
import Wrapper from "./Wrapper";

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <Wrapper>
      <section className={classes.slider}>
        <FaArrowAltCircleLeft
          className={classes.leftArrow}
          onClick={prevSlide}
        />
        <FaArrowAltCircleRight
          className={classes.rightArrow}
          onClick={nextSlide}
        />
        {SliderData.map((slide, index) => {
          return (
            <div
              className={
                index === current ? classes.slide.active : classes.slide
              }
              key={index}
            >
              {index === current && (
                <img src={slide.image} alt="" className={classes.image} />
              )}
            </div>
          );
        })}
      </section>
    </Wrapper>
  );
};

export default ImageSlider;
