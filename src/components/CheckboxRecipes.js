import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ButtonFinish from './ButtonFinish';

function CheckboxRecipes(props) {
  const { ingredients, path, recipes } = props;
  const [checkedBox, setCheckedBox] = useState(true);
  const [array, setArray] = useState([]);

  useEffect(() => {
    if (localStorage.getItem('inProgressRecipes')) {
      setArray(JSON.parse(localStorage.getItem('inProgressRecipes')));
    }
    setCheckedBox(false);
  }, []); // eslint-disable-line

  const setIngredientsInLocalStorage = (param) => {
    setArray((prevState) => [...prevState, param]);
    array.forEach((v) => {
      if (v === param) {
        const arrayFilter = array.filter((e) => e !== param);
        setArray(arrayFilter);
      }
    });
    localStorage.setItem('inProgressRecipes', JSON.stringify([...array, param]));
  };

  return (
    <div>

      <ol>
        { ingredients.map((ingredient, index) => (
          <li key={ index }>
            <label
              htmlFor="input-checkbox"
              data-testid={ `${index}-ingredient-step` }
            >
              <input
                className="input-checkbox"
                type="checkbox"
                checked={ array.some((v) => v === ingredient) || checkedBox }
                onClick={ () => setIngredientsInLocalStorage(ingredient) }
              />
              {ingredient}
            </label>
          </li>
        ))}

      </ol>
      <ButtonFinish
        path={ path }
        recipes={ recipes }
        ingredients={ ingredients }
        array={ array }
      />
    </div>
  );
}
CheckboxRecipes.propTypes = {
  ingredients: PropTypes.shape.isRequired,
  map: PropTypes.func.isRequired,
  path: PropTypes.string.isRequired,
  recipes: PropTypes.shape().isRequired,
};
export default CheckboxRecipes;
