import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import style from '../styles/RecipeDetails.module.css';

const startRecipe = 'Start Recipe';
function ButtonDoneRecipes(props) {
  const [recipesInProgressButton, setRecipesInProgressButton] = useState(false);
  const history = useHistory();
  const { mealsOrDrinks, id } = props;
  console.log(mealsOrDrinks);
  useEffect(() => {
    const recipesInProgress = JSON.parse(localStorage.getItem('inProgressRecipes'));
    if (recipesInProgress) {
      setRecipesInProgressButton(true);
    // recipesInProgress[mealsOrDrinks];
    // const idTrue = recipesInProgress.some((v) => v.id === id);
    }
  }, [recipesInProgressButton]); // eslint-disable-line
  const goToRecipesInProgress = (nameOfButton) => {
    if (nameOfButton === startRecipe) {
      history.push(`/${mealsOrDrinks}/${id}/in-progress`);
    }
  };
  return (
    <button
      data-testid="start-recipe-btn"
      className={ style.button_start }
      type="button"
      onClick={ () => goToRecipesInProgress(recipesInProgressButton
        ? 'Continue Recipe' : startRecipe) }
    >
      { recipesInProgressButton ? 'Continue Recipe' : startRecipe }
    </button>
  );
}
ButtonDoneRecipes.propTypes = {
  mealsOrDrinks: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default ButtonDoneRecipes;
