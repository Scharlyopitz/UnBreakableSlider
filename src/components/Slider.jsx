import { useState } from "react";

import { AnimatePresence, motion as m } from "motion/react";

import Booki from "/Booki-1440.webp";
import Kasa from "/Kasa-1440.webp";
import Ohmyfood from "/Ohmyfood-1440.webp";
import Projet9 from "/Projet9-1440.webp";
import SophieBluel from "/SophieBluel-1440.webp";
import WilhelmPortrait from "/WilhelmPortrait-1440.webp";

export default function Slider() {
  const slides = [
    { number: "001", text: "Hey Yo", image: Booki },
    { number: "002", text: "Nirvana", image: Kasa },
    { number: "003", text: "Shakira", image: Ohmyfood },
    { number: "004", text: "Drake", image: Projet9 },
    { number: "005", text: "Nicki Minaj", image: SophieBluel },
    { number: "006", text: "Beyonce", image: WilhelmPortrait },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [animationId, setAnimationId] = useState(0); // 👉 compteur de redémarrage

  const handlePrev = () => {
    const newIndex = (currentSlide - 1 + slides.length) % slides.length;
    setCurrentSlide(newIndex);
    setAnimationId((id) => id + 1); // 🔁 force nouvelle animation
  };

  const handleNext = () => {
    const newIndex = (currentSlide + 1) % slides.length;
    setCurrentSlide(newIndex);
    setAnimationId((id) => id + 1); // 🔁 force nouvelle animation
  };

  const textAnimation = {
    initial: {
      y: "100%",
    },
    animate: {
      y: 0,
      transition: { duration: 1, ease: [0.33, 1, 0.68, 1] },
    },
    exit: {
      y: "-100%",
      transition: { duration: 0.85, ease: [0.33, 1, 0.68, 1] },
    },
  };

  const imageAnimation = {
    initial: {
      opacity: 0,
      scale: 0.9,
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: [0.33, 1, 0.68, 1] },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.85, ease: [0.33, 1, 0.68, 1] },
    },
  };

  return (
    <section id="Slider">
      <AnimatePresence initial={false}>
        <m.div
          key={currentSlide} // change de slide !
          initial="initial"
          animate="animate"
          exit="exit"
          className="slide"
        >
          <div className="numberContainer">
            <m.p
              key={animationId} // 🔑 redémarre
              variants={textAnimation}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              {slides[currentSlide].number}
            </m.p>
          </div>
          <div className="textContainer">
            <m.p
              key={animationId} // 🔑 redémarre
              variants={textAnimation}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              {slides[currentSlide].text}
            </m.p>
          </div>
          <div className="imageContainer">
            <m.img variants={imageAnimation} src={slides[currentSlide].image} alt={slides[currentSlide].text} />
          </div>
        </m.div>
      </AnimatePresence>

      <div className="buttonContainer">
        <p onClick={handlePrev}>Précédent</p> / <p onClick={handleNext}>Suivant</p>
      </div>
    </section>
  );
}
