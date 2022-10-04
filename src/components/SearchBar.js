import { useContext, useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import AppContext from '../context/AppContext';
import fetchRecipes from '../services';
import styles from '../styles/SearchBar.module.css';

export default function SearchBar() {
  const [searchRadio, setSearchRadio] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const [isRedirect, setIsRedirect] = useState(false);
  const { setRecipes, recipes } = useContext(AppContext);
  const history = useHistory();
  const path = history.location.pathname;
  const nameRecipe = path === '/meals' ? 'Meal' : 'Drink';

  const verifyPath = (urlMeals, urlDrink) => {
    const URL = history.location.pathname === '/meals'
      ? urlMeals : urlDrink;
    return URL;
  };

  const checkLengthRequisition = (data) => {
    if (!data) {
      global.alert('Sorry, we haven\'t found any recipes for these filters.');
    } else if (data.length === 1) {
      setRecipes(data);
      setIsRedirect(true);
    } else {
      setRecipes(data);
    }
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
            checkLengthRequisition(data);
          });
      }
      break;
    case 'first letter':
      if (searchInput.length === 1) {
        const urlMeals = `https://www.themealdb.com/api/json/v1/1/search.php?f=${searchInput}`;
        const urlDrin = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${searchInput}`;
        const URL = verifyPath(urlMeals, urlDrin);
        fetchRecipes(URL).then((data) => {
          checkLengthRequisition(data);
        });
      } else {
        global.alert('Your search must have only 1 (one) character');
      }
      break;
    case 'name':
      if (searchInput !== '') {
        const urlMeals = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`;
        const urlDrin = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchInput}`;
        const URL = verifyPath(urlMeals, urlDrin);
        fetchRecipes(URL).then((data) => {
          checkLengthRequisition(data);
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
    <div className={ styles.containerSearchBar }>
      <input
        className={ styles.inputSearch }
        type="text"
        data-testid="search-input"
        placeholder="Search"
        value={ searchInput }
        onChange={ (e) => setSearchInput(e.target.value) }
      />
      <div className={ styles.containerRadio }>
        <div className={ styles.contentRadio }>
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
        </div>
        <button
          type="button"
          data-testid="exec-search-btn"
          onClick={ handleClick }
        >
          Search
        </button>
      </div>
      {isRedirect && <Redirect to={ `${path}/${recipes[0][`id${nameRecipe}`]}` } />}
    </div>
  );
}
