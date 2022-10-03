import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import fetchRecipes from '../services';
import shareIcon from '../images/shareIcon.svg';
import whiteHeart from '../images/whiteHeartIcon.svg';
import AppContext from '../context/AppContext';

function RecipeInProgress(idRecipes) {
  const [recipes, setRecipes] = useState([{}]);
  const [checkedBox, setCheckedBox] = useState(true);
  const history = useHistory();
  const path = history.location.pathname;
  const {
    match: {
      params: { id },
    },
  } = idRecipes;

  const recipesFinish = JSON.parse(localStorage.getItem('inProgressRecipes'));

  useEffect((ingredient) => {
    setCheckedBox(false);
    if (recipesFinish && recipesFinish.includes(ingredient)) {
      setCheckedBox(true);
    }
  }, []);

  useEffect(() => {
    const getRecipes = async () => {
      if (path.includes('meals')) {
        const meals = await fetchRecipes(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
        );
        setRecipes(meals);
      } else if (path.includes('drinks')) {
        // console.log('drinks');
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

  const arrayFood = [];
  const setIngredientsInLocalStorage = (param) => {
    arrayFood.push(param);
    localStorage.setItem('inProgressRecipes', JSON.stringify(arrayFood));
  };
  const { setPathname } = useContext(AppContext);
  const hadleClick = () => {
    history.push('/done-recipes');
    setPathname(path);
  };

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
          <ol>
            {ingredients.map((ingredient, index, item) => (
              <li key={ recipes.id }>
                <label
                  htmlFor="input-checkbox"
                  key={ recipes.id }
                  data-testid={ `${index}-ingredient-step` }
                >
                  <input
                    className="input-checkbox"
                    type="checkbox"
                    name={ item }
                    checked={ checkedBox }
                    onChange={ () => (setIngredientsInLocalStorage(ingredient)) }
                  />
                  {ingredient}
                </label>
              </li>
            ))}
          </ol>
          <button type="button" data-testid="finish-recipe-btn" onClick={ hadleClick }>
            Finish recipe
          </button>
        </div>
      ))}
    </div>
  );
}

export default RecipeInProgress;
