import React from 'react';
import Footer from '../components/Footer';
import Recipes from '../components/Recipes';

function Drinks() {
  return (
    <div className="meals">
      <Recipes
        URL_RECIPES="https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
        URL_RECIPES_CATEGORIES="https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list"
        nameRecipe="Drink"
      />

      <Footer />
    </div>
  );
}

export default Drinks;
