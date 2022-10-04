import PropTypes from 'prop-types';
import { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import AppContext from '../context/AppContext';
import CardRecipes from './CardRecipes';
import ButtonsCategory from './ButtonsCategory';
import styles from '../styles/Recipes.module.css';
import beef from '../images/beef.svg';
import breakFast from '../images/breakfast.svg';
import chicken from '../images/chicken.svg';
import dessert from '../images/dessert.svg';
import lamb from '../images/lamb.svg';
import drinks from '../images/drink.svg';
import cocktail from '../images/cocktail.svg';
import shake from '../images/shake.svg';
import other from '../images/other.svg';
import cocoa from '../images/cocoa.svg';
import iconPrato from '../images/allComida.svg';
import iconBebida from '../images/allBebida.svg';

const arrMeals = [beef, breakFast, chicken, dessert, lamb];
const arrDrinks = [drinks, cocktail, shake, other, cocoa];

export default function Recipes({ nameRecipe }) {
  const { recipes, recipeCategories } = useContext(AppContext);
  const history = useHistory();
  const path = history.location.pathname;
  const MAX_RECIPES = 12;
  const MAX_RECIPES_CATEGORY = 5;
  const arrCategories = path === '/meals' ? arrMeals : arrDrinks;

  return (
    <section className={ styles.containerRecipes }>
      <div className={ styles.category }>
        <ButtonsCategory
          categoryName="All"
          image={ path === '/meals' ? iconPrato : iconBebida }
        />
        {recipeCategories.length > 0 && recipeCategories.map((recipeCategory, index) => (
          index < MAX_RECIPES_CATEGORY ? (
            <ButtonsCategory
              key={ recipeCategory.strCategory }
              categoryName={ recipeCategory.strCategory }
              image={ arrCategories[index] }
            />

          ) : ''
        ))}

      </div>
      <div className={ styles.contentRecipes }>
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
      </div>
    </section>
  );
}

Recipes.propTypes = {
  nameRecipe: PropTypes.string.isRequired,
};
