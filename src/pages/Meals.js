import React, { useContext, useEffect } from 'react';
import Footer from '../components/Footer';
import Recipes from '../components/Recipes';
import AppContext from '../context/AppContext';
import fetchRecipes from '../services';
import Header from '../components/Header';

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
    <>
      <Header
        title="Meals"
        search
      />
      <Recipes
        nameRecipe="Meal"
      />
      <Footer />
    </>
  );
}

export default Meals;
