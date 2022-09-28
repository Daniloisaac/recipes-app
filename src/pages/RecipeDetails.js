// import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import fetchRecipes from '../services';
// import CardRecipes from '../components/CardRecipes';
// import AppContext from '../context/AppContext';
// import ButtonsCategory from './ButtonsCategory';
// import CardRecipes from './CardRecipes';

export default function RecipeDetails(idRecipes) {
  const [recipes, setRecipes] = useState([{}]);
  const history = useHistory();
  const path = history.location.pathname;
  const { match: { params: { id } } } = idRecipes;
  useEffect(() => {
    const getRecipes = async () => {
      if (path.includes('meals')) {
        const
          meals = await fetchRecipes(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        setRecipes(meals);
      } else if (path.includes('drinks')) {
        const
          drinks = await fetchRecipes(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
        setRecipes(drinks);
      }
    };
    getRecipes();
  }, [id]); // eslint-disable-line
  console.log(recipes);

  return (
    <div>
      <h1>Recipe Details</h1>
      {/* {recipes.map((recipe, i) => (
        <CardRecipes
          // key={ id }
          // name={ recipe[`str${nameRecipe}`] }
          // image={ recipe[`str${nameRecipe}Thumb`] }
          index={ i }
        />
      ))} */}
    </div>
  );
}
