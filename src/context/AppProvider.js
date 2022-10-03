import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [recipes, setRecipes] = useState([]);
  const [recipeCategories, setRecipeCategories] = useState([]);
<<<<<<< HEAD
  
=======
  const [pathname, setPathname] = useState('');
>>>>>>> 494755f188e55216f0f0b4fd999e3fd0328e6d3f

  const context = useMemo(() => ({
    recipes,
    setRecipes,
    recipeCategories,
    setRecipeCategories,
    setPathname,
    pathname,
  }), [recipes, recipeCategories]); // eslint-disable-line

  return (
    <AppContext.Provider value={ context }>
      {children}
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProvider;
