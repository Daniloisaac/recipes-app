import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styles from '../styles/MainProfile.module.css';
import iconDone from '../images/done.svg';
import iconFav from '../images/fav.svg';
import iconLogout from '../images/logout.svg';

function MainProfile() {
  const [email, setEmail] = useState('');
  const history = useHistory();

  useEffect(() => {
    const getLocalStorage = () => {
      const user = localStorage.getItem('user');
      if (user) {
        const obj = JSON.parse(user);
        setEmail(obj.email);
      }
    };
    getLocalStorage();
  }, []);

  const handleClick = (name) => {
    history.push(name);
  };

  const logout = () => {
    console.log('entrou no logout');
    localStorage.clear();
    history.push('/');
  };

  return (
    <div className={ styles.containerProfile }>
      <h5 data-testid="profile-email">{ email }</h5>
      <div>

        <button
          type="button"
          data-testid="profile-done-btn"
          onClick={ () => handleClick('/done-recipes') }
        >
          <img
            src={ iconDone }
            alt=""
          />
          <p>Done Recipes</p>
        </button>
        <button
          type="button"
          data-testid="profile-favorite-btn"
          onClick={ () => handleClick('/favorite-recipes') }
        >
          <img
            src={ iconFav }
            alt=""
          />
          <p>Favorite Recipes</p>
        </button>
        <button
          type="button"
          data-testid="profile-logout-btn"
          onClick={ logout }
        >
          <img
            src={ iconLogout }
            alt=""
          />
          <p>Logout</p>
        </button>
      </div>
    </div>
  );
}

export default MainProfile;
