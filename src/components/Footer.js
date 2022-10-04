import React from 'react';
import { Link } from 'react-router-dom';
import drinkIcon from '../images/iconeBebida.svg';
import mealIcon from '../images/iconePrato.svg';
import style from '../styles/Footer.module.css';

function Footer() {
  return (
    <footer
      className={ style.footer }
      data-testid="footer"
    >
      <div className={ style.containerImgs }>
        <div className={ style.imgs }>
          <Link to="/drinks">
            <img
              data-testid="drinks-bottom-btn"
              className={ style.drink }
              src={ drinkIcon }
              alt="drinkIcon"
            />
          </Link>
        </div>

        <div className={ style.imgs }>
          <Link to="/meals">
            <img
              data-testid="meals-bottom-btn"
              className={ style.img_meals }
              src={ mealIcon }
              alt="drinkIcon"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
