import React, { useState } from "react";
import { SliderDataComaneci } from "./SliderDataComaneci";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import classes from "./ImageSlider.module.css";
import Wrapper from "./Wrapper";
import QuizzComaneci from "../Quizz/QuizzComaneci";

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
        {SliderDataComaneci.map((slide, index) => {
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
      <div className={classes.data}>
        I se spune românca de 10 și toată lumea a auzit de Nadia Comăneci. Nadia
        este o legendă vie, fiind prima sportivă din istoria gimnasticii care a
        obținut nota maximă. Astăzi, trecem în revistă câteva lucruri mai puțin
        știute despre campioana noastră. A fost în pericol să fie răpită, în
        urmă cu aproape 40 de ani. Înaintea Campionatelor Mondiale de la Fort
        Worth, din 1979, organizatorii au cerut protecţie sporită în jurul
        delegaţiei României, deoarece existau informaţii privind o posibilă
        răpire a Nadiei. A primit propunerea de a fi actriță. În 1977, o
        televiziune americană i-a propus Nadiei rolul principal într-un film în
        care ea urma să interpreteze rolul unei eroine din poveştile pentru
        copii. La acea vreme, partidul nu a fost de acord cu acest lucru. Nadia
        a fost botezată după eroina unui film sovietic. Impresionaţi de eroismul
        acestei Nadia, părinţii campioanei au decis să o boteze aşa pe fiica
        lor. Nadia a avut întotdeauna un Motto: Nu te ruga pentru o viață
        ușoară! Roagă-te să fii o persoană puternică! În vizită la Diana Ross.
        În 1981, Nadia şi celelalte gimnaste au participat la o serie de
        demonstraţii în SUA. După demonstraţia din New York, Nadia şi Nicolae
        Vieru s-au întâlnit cu Ilie Năstase, care i-a dus în vizită la
        apartamentul iubitei sale de atunci, interpreta Diana Ross.
      </div>
      <QuizzComaneci />
    </Wrapper>
  );
};

export default ImageSlider;
