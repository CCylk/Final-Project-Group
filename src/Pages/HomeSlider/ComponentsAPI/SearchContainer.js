import React from "react";
import './weather.css'

function Weather(props) {
  return (
    <div className="weather-props">
      {props.name}
      {props.temp}
      {props.desc}
      {props.img}
    </div>

  );
}

export default Weather;