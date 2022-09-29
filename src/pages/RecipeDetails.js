// import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import fetchRecipes from '../services';
import '../styles/RecipeDetails.css';

const MAX_NUMBERS_CARDS_ACCOMPANIMETS = 6;
const startRecipe = 'Start Recipe';

export default function RecipeDetails(idRecipes) {
  const [recipes, setRecipes] = useState([{}]);
  const [accompaniments, setaccompaniments] = useState([{}]);
  const [showButton, setShowButton] = useState(true);
  const [recipesInProgressButton, setRecipesInProgressButton] = useState(false);

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
        setaccompaniments(drink);
      } else if (path.includes('drinks')) {
        const
          drinks = await fetchRecipes(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
        const
          meals = await fetchRecipes('https://www.themealdb.com/api/json/v1/1/search.php?s=');
        setRecipes(drinks);
        setaccompaniments(meals);
      }
    };
    getRecipes();
  }, [id]); // eslint-disable-line

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

  // localStorage.setItem('doneRecipes', JSON.stringify([{
  //   id,
  //   type: 'meal',
  //   nationality: '',
  //   category: '',
  //   alcoholicOrNot: '',
  //   name: '',
  //   image: '',
  //   doneDate: '',
  //   tags: '',
  // }]));
  // localStorage.setItem('inProgressRecipes', JSON.stringify(
  //   {
  //     drinks: {
  //       [id]: ['lista-de-ingredientes-utilizados'],
  //     },
  //     meals: {
  //       [id]: ['lista-de-ingredientes-utilizados'],
  //     },
  //   },
  // ));

  useEffect(() => {
    const recipesFinish = JSON.parse(localStorage.getItem('doneRecipes'));
    if (recipesFinish) {
      const idTrue = recipesFinish.some((v) => v.id === id);
      setShowButton(!idTrue);
      // } else if (recipesInProgress) {
      //   console.log('oi aqui ta certo');
      //   // const mealsOrDrinks = path.includes('meals') ? 'meals' : 'drinks';
      //   // recipesInProgress[mealsOrDrinks];
      //   // const idTrue = recipesInProgress.some((v) => v.id === id);

    //   setRecipesInProgressButton(true);
    //   console.log(recipesInProgressButton);
    }
  }, []); // eslint-disable-line
  const mealsOrDrinks = path.includes('meals') ? 'meals' : 'drinks';

  useEffect(() => {
    const recipesInProgress = JSON.parse(localStorage.getItem('inProgressRecipes'));
    if (recipesInProgress) {
      setRecipesInProgressButton(true);
      console.log(recipesInProgressButton);
      // recipesInProgress[mealsOrDrinks];
      // const idTrue = recipesInProgress.some((v) => v.id === id);
    }
  }, [recipesInProgressButton]); // eslint-disable-line
  const goToRecipesInProgress = (nameOfButton) => {
    if (nameOfButton === startRecipe) {
      // console.log('deu certo');
      // <Link
      //   key={ recipe[`id${nameRecipe}`] }
      //   to={ `${path}/${recipe[`id${nameRecipe}`]}` }
      // />;
      history.push(`/${mealsOrDrinks}/${id}/in-progress`);
    }
  };
  return (
    <div className="div-details">
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
      <div className="div-accompaniment">

        {accompaniments.map((accompaniment, i) => (
          i < MAX_NUMBERS_CARDS_ACCOMPANIMETS
         && (
           <div className="div-test">
             {' '}
             <img
               className="img-accompaniment"
               data-testid={ `${i}-recommendation-card` }
               src={ path.includes('meals')
                 ? accompaniment.strDrinkThumb : accompaniment.strMealThumb }
               alt={ path.includes('meals')
                 ? accompaniment.strDrink : accompaniment.strMeal }
             />
             <span
               data-testid={ `${i}-recommendation-title` }
             >
               { path.includes('meals')
                 ? accompaniment.strDrink : accompaniment.strMeal }
             </span>
           </div>
         )
        ))}
      </div>
      { showButton
      && (
        <button
          data-testid="start-recipe-btn"
          className="button-start"
          type="button"
          onClick={ () => goToRecipesInProgress(recipesInProgressButton
            ? 'Continue Recipe' : startRecipe) }
        >
          { recipesInProgressButton ? 'Continue Recipe' : 'Start Recipe'}
        </button>
      )}
    </div>
  );
}
