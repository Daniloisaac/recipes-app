import React, { useState } from 'react';
import PropTypes from 'prop-types';
import style from '../styles/RecipeDetails.module.css';

import shareIcon from '../images/shareIcon.svg';

const copy = require('clipboard-copy');

function ButtonCopy(props) {
  const [alert, setAlert] = useState(false);
  const { path } = props;

  const setCopyOfLink = () => {
    copy(`http://localhost:3000${path}`);
    setAlert(true);
  };

  return (
    <div>
      <div className={ style.div_alert }>{alert && 'Link copied!'}</div>
      <button
        data-testid="share-btn"
        className={ style.button_share }
        type="button"
        onClick={ setCopyOfLink }
      >
        Compartilhar
        <img src={ shareIcon } alt="shareIcon" />
      </button>
    </div>
  );
}
ButtonCopy.propTypes = {
  path: PropTypes.string.isRequired,
};
export default ButtonCopy;
