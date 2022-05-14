import { Fragment } from "react";
import ImageSlider from "../Components/ImageSlider/ImageSlider";
import { SliderData } from "../Components/ImageSlider/SliderData";

const HagiPage = () => {
  return (
    <Fragment>
      <ImageSlider slides={SliderData} />
    </Fragment>
  );
};

export default HagiPage;
