import { useState } from "react";

import { AnimatePresence, motion as m } from "motion/react";

export default function Slider() {
  const slides = [
    { number: "001", text: "Hey Yo" },
    { number: "002", text: "Nirvana" },
    { number: "003", text: "Shakira" },
    { number: "004", text: "Drake" },
    { number: "005", text: "Nicki Minaj" },
    { number: "006", text: "Beyonce" },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [animationId, setAnimationId] = useState(0); // 👉 compteur de redémarrage
  console.log(animationId);
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
        </m.div>
      </AnimatePresence>

      <div className="buttonContainer">
        <p onClick={handlePrev}>Précédent</p> / <p onClick={handleNext}>Suivant</p>
      </div>
    </section>
  );
}
