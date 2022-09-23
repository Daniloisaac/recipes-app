import React from 'react';

function Login() {
  // const {
  // stateEmail,
  // setStateEmail,
  // statePassw,
  // setStatePassw,
  // stateDisable,
  // setStateEnable,
  // } = useContext(contexValue);
  return (
    <div>
      <label htmlFor="email-input">
        Email:
        <input type="email" data-testid="email-input" />
      </label>
      <label htmlFor="password-input">
        Senha:
        <input type="password" data-testid="password-input" />
      </label>
      <button type="button" data-testid="login-submit-btn">
        Enter
      </button>
    </div>
  );
}

export default Login;
