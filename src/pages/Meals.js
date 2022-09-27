import React, { useContext, useEffect } from 'react';
import Footer from '../components/Footer';
import Recipes from '../components/Recipes';
import AppContext from '../context/AppContext';
import fetchRecipes from '../services';

function Meals() {
  const {
    setRecipes,
    setRecipeCategories,
  } = useContext(AppContext);

  useEffect(() => {
    const getRecipes = async () => {
      const drinks = await fetchRecipes('https://www.themealdb.com/api/json/v1/1/search.php?s=');
      const categories = await fetchRecipes('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
      setRecipes(drinks);
      setRecipeCategories(categories);
    };
    getRecipes();
  }, [setRecipeCategories, setRecipes]);

  return (
    <div className="meals">
      <Recipes
        nameRecipe="Meal"
      />
      <Footer />
    </div>
  );
}

export default Meals;
