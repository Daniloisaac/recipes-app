import React from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const contextValue = 'teste';

  return (
    <div>
      <AppContext.Provider value={ contextValue }>
        {children}
      </AppContext.Provider>
    </div>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProvider;
