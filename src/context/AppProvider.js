import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [recipes, setRecipes] = useState([]);
  const [recipeCategories, setRecipeCategories] = useState([]);
  

  const context = useMemo(() => ({
    recipes,
    setRecipes,
    recipeCategories,
    setRecipeCategories,
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
