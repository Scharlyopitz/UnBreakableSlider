export default function Slider() {
  const slides = [
    { number: "001", text: "Hey Yo" },
    { number: "002", text: "Nirvana" },
    { number: "003", text: "Shakira" },
    { number: "004", text: "Drake" },
    { number: "005", text: "Niki Minaj" },
    { number: "006", text: "Beyonce" },
  ];

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
    </section>
  );
}
