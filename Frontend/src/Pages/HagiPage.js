import { Fragment } from "react";
import ImageSliderHagi from "../Components/ImageSlider/ImageSliderHagi";
import { SliderDataHagi } from "../Components/ImageSlider/SliderDataHagi";

const HagiPage = () => {
  return (
    <Fragment>
      <ImageSliderHagi slides={SliderDataHagi} />
    </Fragment>
  );
};

export default HagiPage;
