import React from 'react';
import shareIcon from '../images/shareIcon.svg'
import whiteHeart from '../images/whiteHeartIcon.svg'

function RecipeInProgress() {
  return (
    <div>
      <img data-testid="recipe-photo" src='' />
      <h2 data-testid="recipe-title">{}</h2>
      <button type='button' data-testid="share-btn"><img src={shareIcon} /></button>
      <button type='button' data-testid="favorite-btn"><img src={whiteHeart} /></button>
      <h3 data-testid="recipe-category"></h3>
      <ul data-testid="instructions">
        <li></li>
      </ul>
      <button type='button'>Finalizar</button>
    </div>
  )
}

export default RecipeInProgress;
