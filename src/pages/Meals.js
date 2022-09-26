import React from 'react';
import CardRecipes from '../components/CardRecipes';
import Footer from '../components/Footer';
import useFetchRecipes from '../hooks/useFetchRecipes';

function Meals() {
  const { meals } = useFetchRecipes('https://www.themealdb.com/api/json/v1/1/search.php?s=');
  const MAX_MEALS = 12;

  return (
    <div className="meals">
      {meals && Object.keys(meals).map((key, index) => (
        index < MAX_MEALS ? <CardRecipes
          key={ meals[key].idMeal }
          name={ meals[key].strMeal }
          image={ meals[key].strMealThumb }
          index={ index }
        /> : ''
      ))}
      <Footer />
    </div>
  );
}

export default Meals;
