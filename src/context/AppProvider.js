// import React, { useState } from 'react';
import React from 'react'; 
// Quando adicionarem algum estado utilizar a linha 1 e apagar a 2;
import AppContext from './AppContext';

function AppProvider({ children }) {
  const contextValue = { initialState }
  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider;