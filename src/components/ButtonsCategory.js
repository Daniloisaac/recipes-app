import PropTypes from 'prop-types';

export default function ButtonsCategory({ categoryName }) {
  return (
    <button
      type="button"
      data-testid={ `${categoryName}-category-filter` }
    >
      {categoryName}

    </button>
  );
}

ButtonsCategory.propTypes = {
  categoryName: PropTypes.string.isRequired,
};
