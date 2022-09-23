import React from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

function AppProvider({ children }) {
  // const [stateEmail, setStateEmail] = useState('');
  // const [ statePassw , setStatePassw ] = useState('');
  // const [stateDisable, setStateEnable] = useState(false);
  // const contextValue = {
  // stateEmail,
  // setStateEmail,
  // statePassw,
  // setStatePassw,
  // stateDisable,
  // setStateEnable,
  // };
  const contextValue = 'teste';

  return (
    <AppContext.Provider value={ contextValue }>
      {children}
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default AppProvider;
