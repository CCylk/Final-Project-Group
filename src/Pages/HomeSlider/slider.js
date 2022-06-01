import React, { useEffect, useState } from "react";
import SliderContent from "./sliderContent";
import Arrows from "./arrows";
import "./slider.css";
import sliderWeather from "./sliderWeather";



const len = sliderWeather.length - 1;

function Slider(props) {
  const [activeIndex, setActiveIndex] = useState(0);
  
  return (
    <div className="slider-container">
      <SliderContent activeIndex={activeIndex} sliderWeather={sliderWeather} />
      <Arrows
        prevSlide={() =>
          setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
        }
        nextSlide={() =>
          setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
        }
      />
    </div>
  );
}

export default Slider;