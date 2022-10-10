import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clipboardCopy from 'clipboard-copy';
import { Link } from 'react-router-dom';
import imageShare from '../images/shareIcon.svg';
import favoriteBlackIcon from '../images/blackHeartIcon.svg';

export default function CardFavorites(
  {
    srcImage,
    textCategory,
    nameRecipe,
    date,
    index,
    nationality,
    type,
    alcoholicOrNot,
    id,
    changeFavoriteRecipes,
  },
) {
  const [iconFavorite] = useState(favoriteBlackIcon);
  const [copy, setCopy] = useState(false);

  const handleClick = () => {
    changeFavoriteRecipes(id);
  };

  const handleCopyPath = () => {
    const INTERVAL = 2000;
    setCopy(true);
    clipboardCopy(`http://localhost:3000/${type}s/${id}`);
    setTimeout(() => {
      setCopy(false);
    }, INTERVAL);
  };

  return (
    <div>
      {copy && <p>Link copied!</p>}
      <Link to={ `/${type}s/${id}` }>
        <img
          src={ srcImage }
          alt=""
          data-testid={ `${index}-horizontal-image` }
          style={ { width: '200px' } }
        />
      </Link>

      {type === 'meal' ? (
        <p data-testid={ `${index}-horizontal-top-text` }>
          {`${nationality} - ${textCategory}`}
        </p>
      ) : (
        <p data-testid={ `${index}-horizontal-top-text` }>
          {alcoholicOrNot}
        </p>
      )}
      <Link to={ `/${type}s/${id}` }>
        <p data-testid={ `${index}-horizontal-name` }>{nameRecipe}</p>
      </Link>
      <p data-testid={ `${index}-horizontal-done-date` }>{date}</p>
      <button
        type="button"
        onClick={ handleCopyPath }
      >
        <img
          src={ imageShare }
          alt=""
          data-testid={ `${index}-horizontal-share-btn` }
        />
      </button>
      <button
        type="button"
        onClick={ handleClick }
      >
        <img
          src={ iconFavorite }
          alt=""
          data-testid={ `${index}-horizontal-favorite-btn` }
        />
      </button>
    </div>
  );
}

CardFavorites.propTypes = {
  srcImage: PropTypes.string.isRequired,
  textCategory: PropTypes.string,
  nationality: PropTypes.string,
  alcoholicOrNot: PropTypes.string,
  type: PropTypes.string.isRequired,
  nameRecipe: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  changeFavoriteRecipes: PropTypes.func.isRequired,
};

CardFavorites.defaultProps = {
  textCategory: '',
  nationality: '',
  alcoholicOrNot: '',
};
