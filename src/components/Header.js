import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import profileIcon from '../images/iconePerfil.svg';
import searchIcon from '../images/iconePesquisar.svg';
import IconeRecipe from '../images/iconRecipe.svg';
import SearchBar from './SearchBar';
import styles from '../styles/Header.module.css';
import iconPrato from '../images/iconePrato.svg';
import iconBebida from '../images/iconeBebida.svg';
import iconPerfil from '../images/perfil.svg';

function Header({ title, search }) {
  const [isVisible, setIsVisible] = useState(false);
  const [imageHeader, setImageHeader] = useState('');

  useEffect(() => {
    const whatIsImage = () => {
      if (title === 'Meals') {
        setImageHeader(iconPrato);
      } else if (title === 'Drinks') {
        setImageHeader(iconBebida);
      } else if (title === 'Profile') {
        setImageHeader(iconPerfil);
      }
    };
    whatIsImage();
  }, [title]);
  return (
    <section className={ styles.containerHeader }>
      <header>
        <div>
          <img
            src={ IconeRecipe }
            alt=""
            className={ styles.imgIcon }
          />
          <div className={ styles.titleHeader }>
            <h1>Recipes</h1>
            <strong>app</strong>
          </div>
        </div>

        <div>
          { search
      && (
        <div className={ styles.search }>
          <input
            type="image"
            data-testid="search-top-btn"
            id="image"
            alt="Search"
            src={ searchIcon }
            onClick={ () => setIsVisible(!isVisible) }
            className={ styles.imgHeader }
          />
        </div>
      )}

          <Link to="/profile" className={ styles.link }>
            <img
              data-testid="profile-top-btn"
              src={ profileIcon }
              alt="profileIcon"
              className={ styles.imgHeader }
            />
          </Link>

        </div>
      </header>

      <div className={ styles.headerRecipes }>
        <img
          src={ imageHeader }
          alt=""
        />
        <h1>{title}</h1>
      </div>
      { isVisible && <SearchBar /> }
    </section>
  );
}

Header.propTypes = {
  title: PropTypes.any,
  search: PropTypes.any,
}.isRequired;

export default Header;
