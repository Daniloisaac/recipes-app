import React, { useEffect, useState } from 'react';
import ButtonFilter from '../components/ButtonFilter';
import CardFavorites from '../components/CardFavorite';
import Header from '../components/Header';

function FavoriteRecipes() {
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);

  useEffect(() => {
    const getFavoritesRecipesInLocalStorage = () => {
      let recipesFavorites = localStorage.getItem('favoriteRecipes');
      recipesFavorites = JSON.parse(recipesFavorites);
      setFavoriteRecipes(recipesFavorites);
    };
    getFavoritesRecipesInLocalStorage();
  }, []);

  const changeFavoriteRecipes = (id) => {
    const newFavoriteRecipe = favoriteRecipes
      .filter((recipe) => recipe.id !== id);
    setFavoriteRecipes(newFavoriteRecipe);
    localStorage.setItem('favoriteRecipes', JSON.stringify(newFavoriteRecipe));
  };

  return (
    <>
      <Header
        title="Favorite Recipes"
        search={ false }
      />
      <ButtonFilter />
      {favoriteRecipes.map((recipe, index) => (
        <CardFavorites
          key={ recipe.id }
          date={ recipe.doneDate || '' }
          index={ index }
          nameRecipe={ recipe.name }
          srcImage={ recipe.image }
          textCategory={ recipe.category }
          nationality={ recipe.nationality }
          type={ recipe.type }
          alcoholicOrNot={ recipe.alcoholicOrNot }
          id={ recipe.id }
          changeFavoriteRecipes={ changeFavoriteRecipes }
        />
      ))}
    </>
  );
}

export default FavoriteRecipes;
