import {useState} from 'react'
import axios from 'axios'
import './weather.css'
import Weather from './SearchContainer'


function Search() {
    const [weathers, setWeathers] = useState()
    const [city, setCity] = useState('')
    const API = {
    link: "http://api.openweathermap.org/data/2.5/weather?q=",
    key: "&appid=b0432e7a77178ed756d91a25f826447f"
    }

    function handleSearchCity(e) {
        e.preventDefault()
        setCity(e.target.value)
    }

    async function searchWeathers(e) {
        e.preventDefault()
        console.log()
        const response = await axios.get(API.link + city + API.key)
        console.log(response)
        setWeathers(response.data)
    }
  
    

    return (
       <div className="search">
         <input value={city} onChange={handleSearchCity} />
         <button onClick={searchWeathers}>Search</button> 
         <div className="search-container">
         <p className="weather-name">{weathers && <Weather name={weathers.name} />}</p>
         <p className="temps">{weathers && <Weather temp={Math.round(weathers.main.temp - 273.15)} />}</p>
         <p className="weather-desc">{weathers && <Weather className="desc" desc={weathers.weather[0].description} />}</p>
         {console.log(weathers)}
          {/* <img className="img" alt="weather-img" src={`http://openweathermap.org/img/wn/${weathers.weather[0].icon}@2x.png`}></img> */}

         </div>
         </div>
       
    )
};





export default Search;