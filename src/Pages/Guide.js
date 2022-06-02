import React from 'react';
import Countrylist from './DestinationsGuide/Countrylist';
import Weathertable from './DestinationsGuide/Weathertable';
import Intro from './DestinationsGuide/Intro';

const Guide = () => {
  return <div>
    Guide
    <Intro />
        <Countrylist />
        <Weathertable />
    </div>;
};

export default Guide;