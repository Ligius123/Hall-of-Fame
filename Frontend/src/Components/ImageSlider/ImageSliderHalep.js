import React, { useState } from "react";
import { SliderDataHalep } from "./SliderDataHalep";
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
        {SliderDataHalep.map((slide, index) => {
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
        "Clubul este uimitor, sunt multe terenuri, iar Praga este unul dintre
        cele mai frumoase orase pe care le-am vazut. Am avut sansa sa vizitez
        Praga in urma cu 15 ani, dar nu imi amintesc prea multe, asa ca acum am
        fost impresionata." Ce animale iti plac: cainii sau pisicile? "Prefer
        cainii, dar eu nu am acasa, are tatal meu, doi." Cum te-ai descurcat cu
        antrenamentul in timpul izolarii? Au fost aceste luni o lectie de viata,
        in general? "Am avut sansa sa duc o viata normala, fiind tot timpul
        acasa, ceea ce m-a bucurat. A fost dificil, fiind nevoita sa fac
        antrenamentele in casa, dar per total a fost bine." Ce oras iti place
        cel mai mult? "Parisul imi place foarte mult si bineinteles Praga." Care
        este visul tau in tenis? "Am fost numarul 1 WTA, am castigat Grand
        Slamuri. Visul meu? As putea spune: sa castig o medalie olimpica." Care
        a fost cel mai trist moment din cariera? "Finala de la Roland Garros din
        2017" (n.r. pierduta in fata Jelenei Ostapenko) Cum iti pastrezi energia
        la un nivel ridicat in timpul unui meci intens? "Nu este usor, dar
        incerc sa fiu motivata pe parcursul punctelor jucate, deoarece fiecare
        punct in parte are importanta lui si de cele mai multe ori nu ma gandesc
        la rezultat si construiesc punct cu punct." Poti spune ceva in ceha?
        "Dobrý večer!" Simona Halep isi incepe traseul la turneul WTA de la
        Praga azi, odata cu startul competitiei de dublu, in care este angrenata
        alaturi de campioana en-titre a probei de dublu de la Wimbledon, Barbora
        Strycova. Marti, Halep va juca primul sau meci in proba de simplu,
        impotriva Polonei Hercog, numar 46 WTA.
      </div>
    </Wrapper>
  );
};

export default ImageSlider;
