import React from 'react';
import PropTypes from 'prop-types';

export default function ButtonFilter({ favoriteRecipes, setFavoriteRecipes }) {
  const handleFilter = (e) => {
    if (e.target.textContent === 'Meals') {
      const newFavoriteRecipes = favoriteRecipes
        .filter((recipes) => recipes.type === 'meal');
      setFavoriteRecipes(newFavoriteRecipes);
    } else if (e.target.textContent === 'Drinks') {
      const newFavoriteRecipes = favoriteRecipes
        .filter((recipes) => recipes.type === 'drink');
      setFavoriteRecipes(newFavoriteRecipes);
    } else {
      const newFavoriteRecipe = JSON.parse(localStorage.getItem('favoriteRecipes'));
      setFavoriteRecipes(newFavoriteRecipe);
    }
  };
  return (
    <>
      <button
        type="button"
        name="All"
        onClick={ handleFilter }
        data-testid="filter-by-all-btn"
      >
        All
      </button>
      <button
        type="button"
        name="Meals"
        onClick={ handleFilter }
        data-testid="filter-by-meal-btn"
      >
        Meals
      </button>
      <button
        type="button"
        name="Drink"
        onClick={ handleFilter }
        data-testid="filter-by-drink-btn"
      >
        Drinks
      </button>
    </>
  );
}

ButtonFilter.propTypes = {
  favoriteRecipes: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
  setFavoriteRecipes: PropTypes.func.isRequired,
};
