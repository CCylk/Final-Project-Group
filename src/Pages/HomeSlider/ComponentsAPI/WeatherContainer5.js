import React from 'react';
import Data from './Data';
import Error from './Error';
import useFetch from '../useFetch/useFetch';

const WeatherContainer5 = () => {
  const city = 'Birmingham';
  const BASE_URL = `${process.env.REACT_APP_BASE_URL_PART_1}${city}${process.env.REACT_APP_BASE_URL_PART_2}${process.env.REACT_APP_API_KEY}`;

  const { data, error } = useFetch(BASE_URL);
  return (
    <div>
      {error && <Error message={error.message} />}
      {data && <Data data={data} />}
      {console.log(data)}
    </div>
  );
};

export default WeatherContainer5;