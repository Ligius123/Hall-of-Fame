import { Fragment } from "react";
import ImageSliderComaneci from "../Components/ImageSlider/ImageSliderComaneci";
import { SliderDataComaneci } from "../Components/ImageSlider/SliderDataComaneci";

const ComaneciPage = () => {
  return (
    <Fragment>
      <ImageSliderComaneci slides={SliderDataComaneci} />
    </Fragment>
  );
};

export default ComaneciPage;
