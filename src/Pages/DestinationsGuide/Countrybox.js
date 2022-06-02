import React from 'react'
import './Countrybox.css'

const Countrybox = (props) => {
  const { place, image, desc, detail } = props
  return (
    <div class='box-card'>
      <h2>{place}</h2>
      <img src={image} />
      <p class='desc'>{desc}</p>
      <p class='detail'>{detail}</p>
    </div>
  )
}

export default Countrybox