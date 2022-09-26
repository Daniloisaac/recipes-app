import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import SearchBar from './SearchBar';

function Header({ title, search }) {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <section>
      <header>
        <h1 data-testid="page-title">{ title }</h1>
        <Link to="/profile">
          <img data-testid="profile-top-btn" src={ profileIcon } alt="profileIcon" />
        </Link>
        { search
      && (
        <div>
          <input
            type="image"
            data-testid="search-top-btn"
            id="image"
            alt="Search"
            src={ searchIcon }
            onClick={ () => setIsVisible(!isVisible) }
          />
        </div>
        // <img data-testid="search-top-btn" src={ searchIcon } alt="searchIcon" />
      )}
      </header>
      { isVisible && <SearchBar /> }
    </section>
  );
}

Header.propTypes = {
  title: PropTypes.any,
  search: PropTypes.any,
}.isRequired;

export default Header;
