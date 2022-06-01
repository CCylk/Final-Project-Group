import { useState } from 'react';
import axios from 'axios';
import './weather.css';
import SearchContainer from './SearchContainer';

function Search() {
  const [weathers, setWeathers] = useState(null);
  const [city, setCity] = useState('');
  const API = {
    link: 'http://api.openweathermap.org/data/2.5/weather?q=',
    key: '&appid=b0432e7a77178ed756d91a25f826447f',
  };

  function handleSearchCity(e) {
    e.preventDefault();
    setCity(e.target.value);
  }

  async function searchWeathers(e) {
    e.preventDefault();
    console.log();
    const response = await axios.get(`${API.link}${city}${API.key}`);
    console.log(response);
    setWeathers(response.data);
  }

  return (
    <div className='search'>
      <input value={city} onChange={handleSearchCity} />
      <button onClick={searchWeathers}>Search</button>
      {weathers && <SearchContainer weathers={weathers} />}
    </div>
  );
}

export default Search;




