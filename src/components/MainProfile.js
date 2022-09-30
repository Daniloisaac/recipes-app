import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

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
    <div>
      <h5 data-testid="profile-email">{ email }</h5>
      <button
        type="button"
        data-testid="profile-done-btn"
        onClick={ () => handleClick('/done-recipes') }
      >
        Done Recipes
      </button>
      <button
        type="button"
        data-testid="profile-favorite-btn"
        onClick={ () => handleClick('/favorite-recipes') }
      >
        Favorite Recipes
      </button>
      <button
        type="button"
        data-testid="profile-logout-btn"
        onClick={ logout }
      >
        Logout
      </button>
    </div>
  );
}

export default MainProfile;
