import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import fetchRecipes from '../services';
import ButtonCopy from '../components/ButtonCopy';
import ButtonFavorite from '../components/ButtonFavorite';
import CheckboxRecipes from '../components/CheckboxRecipes';

function RecipeInProgress(idRecipes) {
  const [recipes, setRecipes] = useState([{}]);
  const history = useHistory();
  const path = history.location.pathname;
  const {
    match: {
      params: { id },
    },
  } = idRecipes;

  useEffect(() => {
    const getRecipes = async () => {
      if (path.includes('meals')) {
        const meals = await fetchRecipes(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
        );
        setRecipes(meals);
      } else if (path.includes('drinks')) {
        const drinks = await fetchRecipes(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`,
        );
        setRecipes(drinks);
      }
    };
    getRecipes();
  }, []);
  let ingredients = [];
  recipes.forEach(
    ({
      strIngredient1,
      strIngredient2,
      strIngredient3,
      strIngredient4,
      strIngredient5,
      strIngredient6,
      strIngredient7,
      strIngredient8,
      strIngredient9,
      strIngredient10,
      strIngredient11,
      strIngredient12,
      strIngredient13,
    }) => {
      ingredients = [
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
        strIngredient6,
        strIngredient7,
        strIngredient8,
        strIngredient9,
        strIngredient10,
        strIngredient11,
        strIngredient12,
        strIngredient13,
      ];
    },
  );
  ingredients = ingredients
    .filter((ingredient) => ingredient !== null)
    .filter((ingredient) => ingredient !== '');

  const mealsOrDrink = path.includes('meals') ? 'meals' : 'drinks';

  return (
    <div>
      {recipes.map((recipe) => (
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

          <ButtonCopy path={ `/${mealsOrDrink}/${id}` } />
          <ButtonFavorite path={ path } id={ id } />

          <p data-testid="recipe-category">
            {path.includes('meals') ? recipe.strCategory : recipe.strAlcoholic}
          </p>
          <p data-testid="instructions">{recipe.strInstructions}</p>

          <CheckboxRecipes
            ingredients={ ingredients }
            path={ path }
            recipes={ recipes }
          />
        </div>
      ))}
    </div>
  );
}

export default RecipeInProgress;
