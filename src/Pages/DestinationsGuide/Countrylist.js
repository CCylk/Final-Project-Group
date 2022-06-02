import React from 'react'
import Countrybox from './Countrybox'
import './Countrylist.css'
import { faker } from '@faker-js/faker'

const Countrylist = () => {
  return (
    <div class='country-list'>
      <Countrybox 
        place='London, England' 
        image={faker.image.city()}
        desc="Cool winters with pleasant Springs and Autumns, and that's just one day!" 
        detail='The London weather is predictably unpredictable. Summers can be rainy and thunder one week to 30 degrees the next. Around the winter months, the London weather normally hovers around freezing and does have the tendency to snow on occassion. While the snowfall is minimal, it can cause chaos with travel. Our advice would be to ALWAYS keep an eye on the weather in London. You never know when you can be caught out.'
      />
      <Countrybox 
        place='Manchester, England' 
        image='img/Manchester.jpg'
        desc="Bring a coat (and an umbrella)!"
        detail="Despite a big reputation as England's wettest city, this is more of a myth than truth. That said, Manchester does receive steady rainfall throughout the year. As we head towards the north of England and Scotland, winters can be colder here compared to London - expect more snowfall too. You will see similar results in the summer too, with Manchester a few degrees cooler than the south, but nothing worth worrying about too much. "
      />
      <Countrybox
        place='Edinburgh, Scotland'
        image='img/Edinburgh.jpg'
        desc="Renowned as the windy city and more of a chill than it's English counterparts."
        detail="As with the rest of the UK, the weather is a little unpredictable here too. To make things worse, it's colder. The combination of the city being hilly and the coast nearby means that there is a strong wind more often than not too. If visiting in the Autumn or Winter expect low temperatures and even a fair bit of snowfall in comparison to England. Summers are milder with some infrequent hotter days."
      />
      <Countrybox
        place='Belfast, Northern Ireland'
        image='img/Belfast.jpg'
        desc='More than capable of rivalling Manchester for excessive rainfall'
        detail="Always be prepared for a shower in Belfast. Winter temperature are cold - but don't let that put you off, as Belfast has plenty to offer indoors. The summer months see warmth, but similar to Edinburgh in that it's not the same heatwave blitz the English can sometimes endure for their one week of Summer. Expect temperatures of around 19 degrees in the summer and plenty of freezing temperatures towards December and January."
      />
    </div>
  )
}

export default Countrylist