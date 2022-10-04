import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import fetchRecipes from '../services';
import style from '../styles/RecipeDetails.module.css';
// import whiteHeartIcon from '../images/whiteHeartIcon.svg';
// import blackHeartIcon from '../images/blackHeartIcon.svg';
// import ButtonCopy from '../components/ButtonCopy';
import ButtonDoneRecipes from '../components/ButtonDoneRecipes';
import share from '../images/share.svg';
import like from '../images/like.svg';
import allComida from '../images/allComida.svg';
import allBebida from '../images/allBebida.svg';

const MAX_NUMBERS_CARDS_ACCOMPANIMETS = 6;

export default function RecipeDetails(idRecipes) {
  const [recipes, setRecipes] = useState([{}]);
  const [accompaniments, setaccompaniments] = useState([{}]);
  const [showButton, setShowButton] = useState(true);
  const [heartBlack, setHeartBlack] = useState(false);

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
  }, [id, path]);

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

  useEffect(() => {
    const recipesFinish = JSON.parse(localStorage.getItem('doneRecipes'));
    if (recipesFinish) {
      const idTrue = recipesFinish.some((v) => v.id === id);
      setShowButton(!idTrue);
    }
  }, [id]);

  const mealsOrDrinks = path.includes('meals') ? 'meals' : 'drinks';

  // const setRecipesFavoritesInLocalStorage = (obj) => {
  //   localStorage.setItem('favoriteRecipes', JSON.stringify([{ id,
  //     type: obj.type,
  //     nationality: obj.nationality,
  //     category: obj.category,
  //     alcoholicOrNot: obj.alcoholicOrNot,
  //     name: obj.name,
  //     image: obj.image }]));
  //   if (obj.heart.includes(blackHeartIcon)) {
  //     setHeartBlack(false);
  //     localStorage.clear('favoriteRecipes');
  //   } else if (obj.heart.includes(whiteHeartIcon)) {
  //     setHeartBlack(true);
  //   }
  // };
  useEffect(() => {
    const recipesFinish = JSON.parse(localStorage.getItem('favoriteRecipes'));
    if (recipesFinish) {
      const idTrue = recipesFinish.some((v) => v.id === id);
      setHeartBlack(idTrue);
    }
  }, [heartBlack, id]);

  return (
    <div className={ style.div_details }>
      {recipes.map((recipe) => (
        <div key={ id }>
          <div className={ style.containerHeader }>
            <div className={ style.mediaSocial }>
              <img
                className={ style.share }
                src={ share }
                alt=""
              />
              <img
                className={ style.like }
                src={ like }
                alt=""
              />
            </div>
            <div className={ style.titleDetails }>
              <img
                src={ path === 'meals' ? allComida : allBebida }
                alt=""
              />
              <p
                data-testid="recipe-category"
              >
                {path.includes('meals') ? recipe.strCategory : recipe.strAlcoholic}
              </p>
            </div>
            <img
              className={ style.img_details }
              data-testid="recipe-photo"
              src={ path.includes('meals') ? recipe.strMealThumb : recipe.strDrinkThumb }
              alt={ path.includes('meals') ? recipe.strMeal : recipe.strDrink }
            />
            <h3
              data-testid="recipe-title"
            >
              {path.includes('meals') ? recipe.strMeal : recipe.strDrink}
            </h3>
          </div>
          <div>
            <div className={ style.ingredients }>
              <h1>Ingredients</h1>
              <ul>
                {ingredients.map((ingredient, i) => (
                  ingredient !== '' && (
                    <li
                      key={ i }
                      data-testid={ `${i}-ingredient-name-and-measure` }
                    >
                      {ingredient}
                    </li>
                  )
                ))}
                {measures.map((measure, i) => (
                  measure !== '' && i < MAX_NUMBERS_CARDS_ACCOMPANIMETS - 1 && (
                    <li
                      key={ i }
                      data-testid={ `${i}-ingredient-name-and-measure` }
                    >
                      {measure}
                    </li>
                  )
                ))}

              </ul>
            </div>
          </div>

          <div className={ style.containerInstructions }>
            <h1>Instructions</h1>
            <p
              className={ style.instructions }
              data-testid="instructions"
            >
              {recipe.strInstructions}
            </p>
          </div>
          <div className={ style.video }>
            <h1>Vídeo</h1>
            {path.includes('meals') && <iframe
              data-testid="video"
              src={ recipe.strYoutube }
              title="YouTube video player"
            />}
          </div>
        </div>
      ))}
      <div className={ style.recommended }>
        <h1>Recommended</h1>
        {accompaniments.map((accompaniment, i) => (
          i < MAX_NUMBERS_CARDS_ACCOMPANIMETS
         && (
           <div className={ style.containerCard }>
             {' '}
             <img
               className={ style.img_accompaniment }
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
        <ButtonDoneRecipes mealsOrDrinks={ mealsOrDrinks } id={ id } />
      )}
      {/* <ButtonCopy path={ path } />
      {
        recipes.map((recipe, i) => (
          <button
            key={ i }
            data-testid="favorite-btn"
            className={ style.button_favorite }
            type="button"
            src={ heartBlack ? blackHeartIcon : whiteHeartIcon }
            onClick={ () => setRecipesFavoritesInLocalStorage({
              type: path.includes('meals') ? 'meal' : 'drink',
              nationality: path.includes('meals') ? recipe.strArea : '',
              category: recipe.strCategory,
              alcoholicOrNot: path.includes('drinks') ? recipe.strAlcoholic : '',
              name: path.includes('meals') ? recipe.strMeal : recipe.strDrink,
              image: path.includes('meals') ? recipe.strMealThumb : recipe.strDrinkThumb,
              heart: heartBlack ? blackHeartIcon : whiteHeartIcon,
            }) }
          >
            <img
              src={ heartBlack ? blackHeartIcon : whiteHeartIcon }
              alt="heartIcon"
            />
          </button>
        ))
      } */}
    </div>
  );
}
