import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import fetchRecipes from '../services';
import shareIcon from '../images/shareIcon.svg';
import whiteHeart from '../images/whiteHeartIcon.svg';

function RecipeInProgress(idRecipes) {
  const [recipes, setRecipes] = useState([{}]);
  const history = useHistory();
  const path = history.location.pathname;
  const {
    match: {
      params: { id },
    },
  } = idRecipes;
  console.log(path.includes('drinks'));
  useEffect(() => {
    const getRecipes = async () => {
      if (path.includes('meals')) {
        const meals = await fetchRecipes(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
        );
        setRecipes(meals);
      } else if (path.includes('drinks')) {
        console.log('drinks');
        const drinks = await fetchRecipes(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`,
        );
        setRecipes(drinks);
      }
    };
    getRecipes();
  }, []);
  let ingredients = [];
  recipes
    .forEach(({ strIngredient1, strIngredient2,
      strIngredient3, strIngredient4, strIngredient5, strIngredient6,
      strIngredient7, strIngredient8, strIngredient9, strIngredient10, strIngredient11,
      strIngredient12, strIngredient13 }) => {
      ingredients = [strIngredient1, strIngredient2, strIngredient3, strIngredient4,
        strIngredient5, strIngredient6, strIngredient7, strIngredient8, strIngredient9,
        strIngredient10, strIngredient11, strIngredient12, strIngredient13];
    });
  ingredients = ingredients
    .filter((ingredient) => ingredient !== null)
    .filter((ingredient) => ingredient !== '');

  return (
    <div>
      {recipes.map((recipe, index) => (
        <div key={ recipe.id }>
          <h1>In progress</h1>
          <img
            data-testid="recipe-photo"
            src={
              path.includes('meals')
                ? recipe.strMealThumb
                : recipe.strDrinkThumb
            }
            alt={ path.includes('meals') ? recipe.strMeal : recipe.strDrink }
          />
          <h1 data-testid="recipe-title">
            {path.includes('meals') ? recipe.strMeal : recipe.strDrink}
          </h1>
          <button type="button" data-testid="share-btn">
            <img src={ shareIcon } alt="share button" />
          </button>
          <button type="button" data-testid="favorite-btn">
            <img src={ whiteHeart } alt="Favorite button" />
          </button>
          <p data-testid="recipe-category">
            {path.includes('meals') ? recipe.strCategory : recipe.strAlcoholic}
          </p>
          <p data-testid="instructions">{recipe.strInstructions}</p>
          {ingredients.map((ingredient) => (
            <label
              htmlFor="input-checkbox"
              key={ recipes.id }
              data-testid={ `${index}-ingredient-step` }
            >
              <input className="input-checkbox" type="checkbox" />
              {ingredient}
            </label>
          ))}
          <button type="button" data-testid="finish-recipe-btn">
            Finish
          </button>
        </div>
      ))}
    </div>
  );
}

export default RecipeInProgress;
