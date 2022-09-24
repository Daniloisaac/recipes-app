import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

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

  const setLocalStorege = () => {
    localStorage.setItem('user', JSON.stringify({ email: inputEmail }));
    localStorage.setItem('mealsToken', JSON.stringify(1));
    localStorage.setItem('drinksToken', JSON.stringify(1));
    history.push('/meals');
  };

  return (
    <div>
      <label htmlFor="email-input">
        Email:
        <input
          data-testid="email-input"
          type="email"
          name="email"
          value={ inputEmail }
          onChange={ ({ target }) => setInputEmail(target.value) }
        />
      </label>
      <label htmlFor="password-input">
        Senha:
        <input
          data-testid="password-input"
          type="password"
          name="password"
          value={ inputPassword }
          onChange={ ({ target }) => setInputPassword(target.value) }
        />
      </label>
      <button
        type="button"
        data-testid="login-submit-btn"
        disabled={ !disableButton }
        onClick={ setLocalStorege }
      >
        Enter
      </button>
    </div>
  );
}

export default Login;
