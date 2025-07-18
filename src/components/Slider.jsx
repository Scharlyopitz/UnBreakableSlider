import { useState } from "react";

export default function Slider() {
  const slides = [
    { number: "001", text: "Hey Yo" },
    { number: "002", text: "Nirvana" },
    { number: "003", text: "Shakira" },
    { number: "004", text: "Drake" },
    { number: "005", text: "Niki Minaj" },
    { number: "006", text: "Beyonce" },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = () => {
    const newIndex = (currentSlide - 1 + slides.length) % slides.length;
    setCurrentSlide(newIndex);
  };
  const handleNext = () => {
    const newIndex = (currentSlide + 1) % slides.length;
    setCurrentSlide(newIndex);
  };

  return (
    <section id="Slider">
      {slides.map(({ number, text }, i) => {
        return (
          <div key={i} className="slide">
            <div className="numberContainer">
              <p>{number}</p>
            </div>
            <div className="textContainer">
              <p>{text}</p>
            </div>
          </div>
        );
      })}
      <div className="buttonContainer">
        <p onClick={handlePrev}>Précédent</p> /<p onClick={handleNext}>Suivant</p>
      </div>
    </section>
  );
}
