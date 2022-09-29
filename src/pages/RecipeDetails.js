// import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import fetchRecipes from '../services';
import '../styles/RecipeDetails.css';
// import CardRecipes from '../components/CardRecipes';
// import AppContext from '../context/AppContext';
// import ButtonsCategory from './ButtonsCategory';
// import CardRecipes from './CardRecipes';

export default function RecipeDetails(idRecipes) {
  const [recipes, setRecipes] = useState([{}]);
  const [accompaniment, setAccompaniment] = useState([{}]);

  const history = useHistory();
  const path = history.location.pathname;
  const { match: { params: { id } } } = idRecipes;
  useEffect(() => {
    const getRecipes = async () => {
      if (path.includes('meals')) {
        const
          meals = await fetchRecipes(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        const
          drink = await fetchRecipes('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
        setRecipes(meals);
        setAccompaniment(drink);
      } else if (path.includes('drinks')) {
        const
          drinks = await fetchRecipes(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
        const
          meals = await fetchRecipes('https://www.themealdb.com/api/json/v1/1/search.php?s=');
        setRecipes(drinks);
        setAccompaniment(meals);
      }
    };
    getRecipes();
  }, [id]); // eslint-disable-line

  console.log(recipes);

  let measures = [];
  recipes
    .forEach(({ strMeasure1, strMeasure2,
      strMeasure3, strMeasure4, strMeasure5, strMeasure6,
      strMeasure7, strMeasure8, strMeasure9, strMeasure10, strMeasure11,
      strMeasure12, strMeasure13 }) => {
      measures = [strMeasure1, strMeasure2, strMeasure3, strMeasure4,
        strMeasure5, strMeasure6, strMeasure7, strMeasure8, strMeasure9,
        strMeasure10, strMeasure11, strMeasure12, strMeasure13];
    });
  measures = measures.filter((ingredient) => ingredient !== null);

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
    .filter((ingredient) => ingredient !== null);

  console.log(ingredients);

  return (
    <div>
      <h1>Recipe Details</h1>
      {recipes.map((recipe) => (
        <div key={ id }>
          {/* <span>{id}</span> */}
          <img
            className="img-details"
            data-testid="recipe-photo"
            src={ path.includes('meals') ? recipe.strMealThumb : recipe.strDrinkThumb }
            alt={ path.includes('meals') ? recipe.strMeal : recipe.strDrink }
          />
          <h3
            data-testid="recipe-title"
          >
            {path.includes('meals') ? recipe.strMeal : recipe.strDrink}
          </h3>

          <span
            data-testid="recipe-category"
          >
            {path.includes('meals') ? recipe.strCategory : recipe.strAlcoholic}
          </span>
          <ol>
            {ingredients.map((ingredient, i) => (
              <li
                key={ i }
                data-testid={ `${i}-ingredient-name-and-measure` }
              >
                {ingredient}
              </li>
            ))}
          </ol>
          <ol>
            {measures.map((measure, i) => (
              <li
                key={ i }
                data-testid={ `${i}-ingredient-name-and-measure` }
              >
                {measure}
              </li>
            ))}
          </ol>
          <h3
            className="instructions"
            data-testid="instructions"
          >
            {recipe.strInstructions}

          </h3>
          {path.includes('meals') && <iframe
            data-testid="video"
            width="560"
            height="315"
            src={ recipe.strYoutube }
            title="YouTube video player"
          />}
        </div>
      ))}
    </div>
  );
}
