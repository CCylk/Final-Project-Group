import React from 'react';
import './weather.css';

const SearchContainer = ({ weathers }) => {
  return (
    <div className='weather-props'>
      {weathers && (
        <div className='search-container'>
          {console.log(weathers)}
          <p className='weather-name'>{weathers.name}</p>
          <p className='temps'>The current temperature in {weathers.name} is {Math.round(weathers.main.temp - 273.15)+ "°C"}</p>
          <div className='weather-search-container'>
          <p className='weather-desc'>{weathers.weather[0].description}</p>
          <img
            className='img'
            alt='weather-img'
            src={`http://openweathermap.org/img/wn/${weathers.weather[0].icon}@2x.png`}
          ></img>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchContainer;