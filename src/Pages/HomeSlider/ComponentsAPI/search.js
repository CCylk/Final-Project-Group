import {useState} from 'react'
import axios from 'axios'
import SearchContent from './SearchContainer'



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
       </div> 
    )
}
export default Search;