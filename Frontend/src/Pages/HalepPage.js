import { Fragment } from "react";
import ImageSliderHalep from "../Components/ImageSlider/ImageSliderHalep";
import { SliderDataHalep } from "../Components/ImageSlider/SliderDataHalep";

const HalepPage = () => {
  return (
    <Fragment>
      <ImageSliderHalep slides={SliderDataHalep} />
    </Fragment>
  );
};

export default HalepPage;
