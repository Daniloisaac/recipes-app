import PropTypes from 'prop-types';

export default function CardRecipes({ name, image, index }) {
  return (
    <div data-testid={ `${index}-recipe-card` }>
      <img
        className="img_recipes"
        src={ image }
        alt={ name }
        data-testid={ `${index}-card-img` }
      />
      <strong data-testid={ `${index}-card-name` }>{name}</strong>
    </div>
  );
}

CardRecipes.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  index: PropTypes.number.isRequired,
};

CardRecipes.defaultProps = {
  name: '',
  image: '',
};
