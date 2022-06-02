import React from 'react';
import "./weather.css";

function convertToC(kelvin) {
  return kelvin - 273.15
}

const Data = ({ data }) => {

  const Temp = Math.round(convertToC(data['main']['temp'])) + "°C";
  return (
    <div>
      <div className='title'>{data.name}</div>
      <div className='content'>
        <div className='temp'>{Temp}</div>
        <div className='description'>{data.weather[0].description}
        </div>
        <img
          src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
          alt="weather status icon"
          className="weather-icon"
            />
      </div>
    </div>
  );
};

export default Data;