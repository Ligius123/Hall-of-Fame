import React, { useState } from "react";
import { SliderDataBranza } from "./SliderDataBranza";
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
        {SliderDataBranza.map((slide, index) => {
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
        Cine este Brânzica? Copilul care a visat, a îndrăznit să creadă în visul
        lui și a muncit pentru el până ce a ajuns să-l împlinească. Cum ai
        descrie în câteva cuvinte relația cu fratele tău, în copilărie? Marius,
        fratele meu mai mare, a fost dintotdeauna genul acela de copil liniștit,
        calculat, ordonat; iar eu sunt exact opusul lui. Când era vorba să
        împărțim dulciurile sau jucăriile, povestea se termina cu lacrimi și
        suspine din partea mea, deși acum pot să recunosc faptul că eu îl
        șicanam pe el și nu invers. Relația s-a schimbat radical după ce m-am
        mutat la Craiova, iar el a venit în vizită și a fost impresionat de
        condițiile nu tocmai luxoase în care îmi desfășuram activitatea. Atunci
        am simțit că relația noastră s-a maturizat. De la cine ai moștenit
        pasiunea pentru scrimă? În familia mea nu a existat o tradiție legată de
        acest sport. Părinții mei aveau câteva cunoștințe, pentru că au iubit
        întotdeauna sportul, dar nimic mai mult. Și faptul că am ajuns la scrimă
        i se datorează tot fratelui meu, Marius. Pe atunci, el era o tânără
        speranță a echipei de fotbal Steaua București și, întorcându-se la un
        moment dat de la antrenament, a văzut sala de scrimă și i s-a părut a fi
        sportul potrivit pentru mine. Eu încercasem tenisul de câmp, dar am
        renunțat la idee după un an de zile. Pe când la scrimă, am rămas la
        antrenament încă de la prima vizită. Scrima este… Scrima a început ca o
        joacă, a devenit o provocare, iar acum este un stil de viață. Ultimii
        douăzeci de ani i-am trăit prin și pentru scrimă! Și nu consider că aș
        fi putut avea aceste rezultate într-un alt sport sau într-un alt
        domeniu. În psihologie, există conceptul de „copil interior“ – care este
        legătura ta, ca adult, cu această parte a sinelui? Poate, cel mai bun
        sfat pe care l-am primit vreodată de la psihologul lotului național a
        fost pe cât de simplu, pe atât de puternic: „Bucură-te de scrimă!“
        Aceste cuvinte traducându-se prin: „Adu-ți aminte de acel copil fascinat
        de sportivii îmbrăcați în costume albe și bucură-te de moment,
        indiferent de numele competiției și de presiunea rezultatului. Mă întorc
        deseori la acel copil și, de acolo, îmi iau energia și dorința de a urca
        din nou și din nou pe podium.
      </div>
    </Wrapper>
  );
};

export default ImageSlider;
