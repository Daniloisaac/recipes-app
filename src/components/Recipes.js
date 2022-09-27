import PropTypes from 'prop-types';
import { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import AppContext from '../context/AppContext';
import ButtonsCategory from './ButtonsCategory';
import CardRecipes from './CardRecipes';

export default function Recipes({ nameRecipe }) {
  const { recipes, recipeCategories } = useContext(AppContext);
  const history = useHistory();
  const path = history.location.pathname;
  const MAX_RECIPES = 12;
  const MAX_RECIPES_CATEGORY = 5;

  return (
    <>
      <div className="categoryMeals">
        {recipeCategories.length > 0 && recipeCategories.map((recipeCategory, index) => (
          index < MAX_RECIPES_CATEGORY ? (
            <ButtonsCategory
              key={ recipeCategory.strCategory }
              categoryName={ recipeCategory.strCategory }
            />
          ) : ''
        ))}
        <ButtonsCategory
          categoryName="All"
        />
      </div>
      {recipes.length > 0 && recipes.map((recipe, index) => (
        index < MAX_RECIPES ? (
          <Link
            key={ recipe[`id${nameRecipe}`] }
            to={ `${path}/${recipe[`id${nameRecipe}`]}` }
          >
            <CardRecipes
              name={ recipe[`str${nameRecipe}`] }
              image={ recipe[`str${nameRecipe}Thumb`] }
              index={ index }
            />
          </Link>
        ) : ''
      ))}

    </>
  );
}

Recipes.propTypes = {
  nameRecipe: PropTypes.string.isRequired,
};
