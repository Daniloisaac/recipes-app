import PropTypes from 'prop-types';
import React, { useState, useEffect, useContext } from 'react';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import AppContext from '../context/AppContext';
import fetchRecipes from '../services';

function ButtonFavorite(props) {
  const { id, path } = props;
  const [heartBlack, setHeartBlack] = useState(false);
  const { recipes, setRecipes } = useContext(AppContext);
  console.log(path);

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

  const setRecipesFavoritesInLocalStorage = (obj) => {
    localStorage.setItem(
      'favoriteRecipes',
      JSON.stringify([
        {
          id,
          type: obj.type,
          nationality: obj.nationality,
          category: obj.category,
          alcoholicOrNot: obj.alcoholicOrNot,
          name: obj.name,
          image: obj.image,
        },
      ]),
    );
    if (obj.heart.includes(blackHeartIcon)) {
      setHeartBlack(false);
      localStorage.clear('favoriteRecipes');
    } else if (obj.heart.includes(whiteHeartIcon)) {
      setHeartBlack(true);
    }
  };

  useEffect(() => {
    const favoriteBlack = JSON.parse(localStorage.getItem('favoriteRecipes'));
    if (favoriteBlack) {
      const idTrue = favoriteBlack.some((v) => v.id === id);
      setHeartBlack(idTrue);
    }
  }, [heartBlack]);

  console.log(recipes);
  return (
    <div>
      {recipes.map((recipe, i) => (
        <button
          key={ i }
          data-testid="favorite-btn"
          type="button"
          src={ heartBlack ? blackHeartIcon : whiteHeartIcon }
          onClick={ () => setRecipesFavoritesInLocalStorage({
            type: path.includes('meals') ? 'meal' : 'drink',
            nationality: path.includes('meals') ? recipe.strArea : '',
            category: recipe.strCategory,
            alcoholicOrNot: path.includes('drinks')
              ? recipe.strAlcoholic
              : '',
            name: path.includes('meals')
              ? recipe.strMeal
              : recipe.strDrink,
            image: path.includes('meals')
              ? recipe.strMealThumb
              : recipe.strDrinkThumb,
            heart: heartBlack ? blackHeartIcon : whiteHeartIcon,
          }) }
        >
          <img
            src={ heartBlack ? blackHeartIcon : whiteHeartIcon }
            alt="heartIcon"
          />
        </button>
      ))}
    </div>
  );
}

ButtonFavorite.propTypes = {
  id: PropTypes.string,
  path: PropTypes.shape({
    includes: PropTypes.func,
  }),
}.IsRequired;

export default ButtonFavorite;
