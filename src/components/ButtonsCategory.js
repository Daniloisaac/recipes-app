import PropTypes from 'prop-types';
import { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import AppContext from '../context/AppContext';
import fetchRecipes from '../services';

export default function ButtonsCategory({ categoryName }) {
  const [categoryClicked, setCategoryClicked] = useState('');
  const history = useHistory();
  const { setRecipes } = useContext(AppContext);

  const handleClick = async (e) => {
    if (categoryClicked === e.target.textContent || e.target.textContent === 'All') {
      const URL = history.location.pathname === '/meals' ? 'https://www.themealdb.com/api/json/v1/1/search.php?s=' : 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
      const recipesByCategories = await fetchRecipes(URL);
      setRecipes(recipesByCategories);
    } else if (history.location.pathname === '/meals') {
      const URL = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${e.target.textContent}`;
      const recipesByCategories = await fetchRecipes(URL);
      setRecipes(recipesByCategories);
      setCategoryClicked(e.target.textContent);
    } else {
      const URL = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${e.target.textContent}`;
      const recipesByCategories = await fetchRecipes(URL);
      setRecipes(recipesByCategories);
      setCategoryClicked(e.target.textContent);
    }
  };
  return (
    <button
      type="button"
      data-testid={ `${categoryName}-category-filter` }
      onClick={ handleClick }
    >
      {categoryName}

    </button>
  );
}

ButtonsCategory.propTypes = {
  categoryName: PropTypes.string.isRequired,
};
