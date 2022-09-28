import { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import AppContext from '../context/AppContext';
import fetchRecipes from '../services';

export const alert = (string) => {
  global.alert(string);
};

export function checkLengthRequisition(data, setRecipes) {
  if (!data) {
    alert('Sorry, we haven\'t found any recipes for these filters.');
  } else {
    setRecipes(data);
  }
}

export function SearchBar() {
  const [searchRadio, setSearchRadio] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const { setRecipes } = useContext(AppContext);
  const history = useHistory();

  const verifyPath = (urlMeals, urlDrink) => {
    const URL = history.location.pathname === '/meals'
      ? urlMeals : urlDrink;
    return URL;
  };

  const handleClick = () => {
    switch (searchRadio) {
    case 'ingredient':
      if (searchInput !== '') {
        const urlMeals = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInput}`;
        const urlDrin = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${searchInput}`;
        const URL = verifyPath(urlMeals, urlDrin);
        fetchRecipes(URL)
          .then((data) => {
            checkLengthRequisition(data, setRecipes);
          });
      }
      break;
    case 'first letter':
      if (searchInput.length === 1) {
        const urlMeals = `https://www.themealdb.com/api/json/v1/1/search.php?f=${searchInput}`;
        const urlDrin = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${searchInput}`;
        const URL = verifyPath(urlMeals, urlDrin);
        fetchRecipes(URL).then((data) => {
          checkLengthRequisition(data, setRecipes);
        });
      } else {
        alert('Your search must have only 1 (one) character');
      }
      break;
    case 'name':
      if (searchInput !== '') {
        const urlMeals = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`;
        const urlDrin = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchInput}`;
        const URL = verifyPath(urlMeals, urlDrin);
        fetchRecipes(URL).then((data) => {
          checkLengthRequisition(data, setRecipes);
        });
      }
      break;
    default:
      break;
    }
    setSearchInput('');
    setSearchRadio('');
  };

  return (
    <div>
      <input
        type="text"
        data-testid="search-input"
        placeholder="busca"
        value={ searchInput }
        onChange={ (e) => setSearchInput(e.target.value) }
      />
      <label htmlFor="input_ingredient">
        <input
          type="radio"
          id="input_ingredient"
          name="search-radio"
          data-testid="ingredient-search-radio"
          onChange={ () => setSearchRadio('ingredient') }
        />
        Ingredient
      </label>
      <label htmlFor="input_name">
        <input
          type="radio"
          id="input_name"
          name="search-radio"
          data-testid="name-search-radio"
          onChange={ () => setSearchRadio('name') }
        />
        Name
      </label>
      <label htmlFor="input_firstLetter">
        <input
          type="radio"
          id="input_firstLetter"
          name="search-radio"
          data-testid="first-letter-search-radio"
          onChange={ () => setSearchRadio('first letter') }
        />
        First letter
      </label>
      <button
        type="button"
        data-testid="exec-search-btn"
        onClick={ handleClick }
      >
        Buscar
      </button>
    </div>
  );
}
