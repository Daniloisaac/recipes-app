import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styles from '../styles/Login.module.css';
import logo from '../images/logo.svg';
import tomate from '../images/tomate.svg';

function Login() {
  const history = useHistory();

  const [disableButton, setDisableButton] = useState(true);
  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');

  useEffect(() => {
    const numberValidation = 6;
    const validationLengthInputs = inputEmail.length > numberValidation
    && inputPassword.length > numberValidation;
    const validationEmail = inputEmail.includes('@') && inputEmail.includes('.com');
    setDisableButton(validationLengthInputs && validationEmail);
  }, [inputEmail, inputPassword]);

  const setLocalStorage = () => {
    localStorage.setItem('user', JSON.stringify({ email: inputEmail }));
    localStorage.setItem('mealsToken', JSON.stringify(1));
    localStorage.setItem('drinksToken', JSON.stringify(1));
    history.push('/meals');
  };

  return (
    <div className={ styles.container }>
      <div className={ styles.containerImages }>
        <img className={ styles.logotipo } src={ logo } alt="" />
        <img className={ styles.tomate } src={ tomate } alt="" />
      </div>

      <div className={ styles.containerLogin }>
        <h1 className={ styles.title }>Login</h1>
        <label htmlFor="email-input">
          <input
            data-testid="email-input"
            type="email"
            name="email"
            placeholder="Email"
            value={ inputEmail }
            onChange={ ({ target }) => setInputEmail(target.value) }
          />
        </label>
        <label htmlFor="password-input">
          <input
            data-testid="password-input"
            type="password"
            name="password"
            placeholder="Password"
            value={ inputPassword }
            onChange={ ({ target }) => setInputPassword(target.value) }
          />
        </label>
        <button
          type="button"
          data-testid="login-submit-btn"
          disabled={ !disableButton }
          onClick={ setLocalStorage }
        >
          Enter
        </button>
      </div>
    </div>
  );
}

export default Login;
