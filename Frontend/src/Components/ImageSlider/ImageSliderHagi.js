import React, { useState } from "react";
import { SliderDataHagi } from "./SliderDataHagi";
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
        {SliderDataHagi.map((slide, index) => {
          return (
            <div>
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
            </div>
          );
        })}
     
      </section>
      <div>
          11. La 31 octombrie 2000, preşedintele
           Emil Constantinescu i-a
          conferit Ordinul Naţional
           „Serviciul Credincios” 
           în grad de Comandor,
          a doua cea mai înaltă distincţie
           a statului român, „o binemeritată şi
          firească recunoaştere a meritelor sale
           sportive”, şi a faptului că
          Hagi „a contribuit la promovarea imaginii
           României în lume”, după cum
          a afirmat preşedintele Constantinescu.
           În martie 2008 a fost decorat
          de președintele Traian Băsescu, 
          printre altele, cu Ordinul „Meritul
          Sportiv” clasa a II-a, „pentru 
          rezultatele obținute în perioada
          1990—2000 prin participarea la turneele
           finale ale campionatelor
          mondiale și europene de fotbal și 
          pentru întreaga activitate sportivă”
          12. Gică Hagi a absolvit ASE-ul, 
          iar când a jucat la Steaua n-a avut
          niciun grad, fiind simplu soldat. 13.
           Pentru Galatasaray, el a
          câştigat 10 trofee în cinci ani: 
          4 titluri naţionale, 2 cupe, 2
          supercupe, o Cupa UEFA, o Supercupă a Europei.
           A fost declarat cel mai
          bun fotbalist din istoria fotbalului turc 14.
           Hagi poartă la picior
          numărul 38, dar asta nu l-a împiedicat să fie 
          foarte tehnic și să
          lovească mingea foarte puternic, imprimându-i
           o biomecanică specială.
          A început să joace fotbal în curte, de mic,
           cu o vezică de porc, iar
          mai târziu, bunicul său i-a confecţionat o
           minge din păr de cal. Abia
          la vârsta de 7 ani Gică Hagi primea o minge
           de cauciuc. 15. Golul său
          din meciul cu Argentina, de la Campionatul
           Mondial din 1994, a fost
          desemnat cel mai frumos gol pe contraatac 
          din istoria competiţiei.
        </div>
    </Wrapper>
  );
};

export default ImageSlider;
