import { Fragment } from "react";
import ImageSliderBranza from "../Components/ImageSlider/ImageSliderBranza";
import { SliderDataBranza } from "../Components/ImageSlider/SliderDataBranza";

const BranzaPage = () => {
  return (
    <Fragment>
      <ImageSliderBranza slides={SliderDataBranza} />
    </Fragment>
  );
};

export default BranzaPage;
