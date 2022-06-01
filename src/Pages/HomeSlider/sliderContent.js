import React from "react";

function SliderContent({ activeIndex, sliderWeather }) {
  return (
    <section>
      {sliderWeather.map((slide, index) => (
        <div
          key={index}
          className={index === activeIndex ? "slides active" : "inactive"}
        >
          <h2 className="slide-title">{slide.title}</h2>
          <h3 className="slide-text">{slide.description}</h3>
        </div>
      ))}
    </section>
  );
}

export default SliderContent;