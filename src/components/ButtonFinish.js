import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

function ButtonFinish(props) {
  const history = useHistory();
  const { path, recipes, ingredients, array } = props;
  console.log(path);
  console.log(recipes);

  const hadleClickFinish = () => {
    if (path.includes('meals')) {
      localStorage.setItem('doneRecipes', JSON.stringify([
        {
          id: recipes[0].idMeal,
          type: 'meal',
          nationality: recipes[0].strArea,
          category: recipes[0].strCategory,
          alcoholicOrNot: '',
          name: recipes[0].strMeal,
          image: recipes[0].strMealThumb,
          doneDate: new Date(),
          tags: recipes[0].strTags && recipes[0].strTags.split(','),
        }]));
    } else if (path.includes('drinks')) {
      localStorage.setItem('doneRecipes', JSON.stringify([
        {
          id: recipes[0].idDrink,
          type: 'drink',
          nationality: recipes[0].strArea,
          category: '',
          alcoholicOrNot: recipes[0].strAlcoholic,
          name: recipes[0].strDrink,
          image: recipes[0].strDrinkThumb,
          doneDate: new Date(),
          tags: recipes[0].strTags && recipes[0].strTags.split(','),
        }]));
    }
    history.push('/done-recipes');
  };

  const test = ingredients.every((v) => array.includes(v));

  return (
    <div>
      <button
        type="button"
        data-testid="finish-recipe-btn"
        onClick={ hadleClickFinish }
        disabled={ !test }
      >
        Finish recipe
      </button>
    </div>
  );
}

ButtonFinish.propTypes = {
  array: PropTypes.shape({
    includes: PropTypes.func,
  }).isRequired,
  ingredients: PropTypes.shape({
    every: PropTypes.func,
  }).isRequired,
  path: PropTypes.shape({
    includes: PropTypes.func,
  }).isRequired,
  recipes: PropTypes.shape().isRequired,
};

export default ButtonFinish;
