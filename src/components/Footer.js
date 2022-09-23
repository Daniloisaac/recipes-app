import React from 'react';
import drinkIcon from '../images/drinkIcon.svg';
import mealIcon from '../images/mealIcon.svg';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer
      className="footer"
      data-testid="footer"
    >
      Footer
      <img data-testid="drinks-bottom-btn" src={ drinkIcon } alt="drinkIcon" />
      <img data-testid="meals-bottom-btn" src={ mealIcon } alt="drinkIcon" />
    </footer>
  );
}

export default Footer;
