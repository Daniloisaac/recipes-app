import React from 'react';
import PropTypes from 'prop-types';

export default function TagsRecipes({ index, tag }) {
  return (
    <span
      data-testid={ `${index}-${tag}-horizontal-tag` }
    >
      {tag}
    </span>
  );
}

TagsRecipes.propTypes = {
  index: PropTypes.number.isRequired,
  tag: PropTypes.string.isRequired,
};
