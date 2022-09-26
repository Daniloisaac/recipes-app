import React from 'react';
import CardRecipes from '../components/CardRecipes';
import Footer from '../components/Footer';
import useFetchRecipes from '../hooks/useFetchRecipes';

function Drinks() {
  const { drinks } = useFetchRecipes('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
  const MAX_DRINKS = 12;

  return (
    <div className="meals">
      {drinks && Object.keys(drinks).map((key, index) => (
        index < MAX_DRINKS ? (
          <CardRecipes
            key={ drinks[key].idDrink }
            name={ drinks[key].strDrink }
            image={ drinks[key].strDrinkThumb }
            index={ index }
          />
        ) : ''
      ))}
      <Footer />
    </div>
  );
}

export default Drinks;
