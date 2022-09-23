// import React, { useState } from 'react';
import PropTypes from 'prop-types';
import React from 'react';
// Quando adicionarem algum estado utilizar a linha 1 e apagar a 2;
import AppContext from './AppContext';

function AppProvider({ children }) {
  // const contextValue = { initialState };
  return (
    <AppContext.Provider>
      {children}
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default AppProvider;
