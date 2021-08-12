// src/context/Provider.js

import PropTypes from 'prop-types';
import React, { useState } from 'react';
import CarsContext from './CarsContext';

function Provider({ children }) {
  const [cars, setCar] = useState({
    red: false,
    blue: false,
    yellow: false,
  });

  const moveCar = (car, side) => {
    setCar({
      ...cars,
      [car]: side,
    });
  };


  const context = {
    ...cars,
    moveCar,
  };

  return (
    <CarsContext.Provider value={ context }>
      {children}
    </CarsContext.Provider>
  );

};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;


setTimeout(() => {
  console.log('Hello, World"');
}, 2000);