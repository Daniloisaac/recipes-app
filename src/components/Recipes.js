import PropTypes from 'prop-types';
import useFetchRecipes from '../hooks/useFetchRecipes';
import ButtonsCategory from './ButtonsCategory';
import CardRecipes from './CardRecipes';

export default function Recipes({ URL_RECIPES, URL_RECIPES_CATEGORIES, nameRecipe }) {
  const recipes = useFetchRecipes(URL_RECIPES);
  const recipesCategories = useFetchRecipes(URL_RECIPES_CATEGORIES);
  const MAX_RECIPES = 12;
  const MAX_RECIPES_CATEGORY = 5;
  return (
    <>
      <div className="categoryMeals">
        {recipesCategories && recipesCategories.map((recipeCategory, index) => (
          index < MAX_RECIPES_CATEGORY ? (
            <ButtonsCategory
              key={ recipeCategory.strCategory }
              categoryName={ recipeCategory.strCategory }
            />
          ) : ''
        ))}
      </div>
      {recipes && recipes.map((recipe, index) => (
        index < MAX_RECIPES ? (
          <CardRecipes
            key={ recipe[`id${nameRecipe}`] }
            name={ recipe[`str${nameRecipe}`] }
            image={ recipe[`str${nameRecipe}Thumb`] }
            index={ index }
          />
        ) : ''
      ))}

    </>
  );
}

Recipes.propTypes = {
  URL_RECIPES: PropTypes.string.isRequired,
  URL_RECIPES_CATEGORIES: PropTypes.string.isRequired,
  nameRecipe: PropTypes.string.isRequired,
};
