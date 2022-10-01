import React from 'react';
import { Link } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import mealIcon from '../images/mealIcon.svg';
import style from '../styles/Footer.module.css';

function Footer() {
  console.log(style);
  return (
    <footer
      className={ style.footer }
      data-testid="footer"
    >
      <Link to="/drinks">
        <img
          data-testid="drinks-bottom-btn"
          className={ style.drink }
          src={ drinkIcon }
          alt="drinkIcon"
        />
      </Link>

      <Link to="/meals">
        <img
          data-testid="meals-bottom-btn"
          className={ style.img_meals }
          src={ mealIcon }
          alt="drinkIcon"
        />
      </Link>
    </footer>
  );
}

export default Footer;
