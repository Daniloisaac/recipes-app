import React from 'react';
import Footer from '../components/Footer';
import Recipes from '../components/Recipes';

function Meals() {
  return (
    <div className="meals">
      <Recipes
        URL_RECIPES="https://www.themealdb.com/api/json/v1/1/search.php?s="
        URL_RECIPES_CATEGORIES="https://www.themealdb.com/api/json/v1/1/list.php?c=list"
        nameRecipe="Meal"
      />
      <Footer />
    </div>
  );
}

export default Meals;
