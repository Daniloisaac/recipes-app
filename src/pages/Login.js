import React from 'react';

function Login() {
  const {
    stateEmail,
		// setStateEmail,
    statePassw, 
    // setStatePassw,
		// stateDisable,
		// setStateEnable,
  } = contexValue;
  return(
    <div>
      <input type="email" data-testid="email-input" value={ stateEmail } />
      <input type="password" data-testid="password-input" value={ statePassw } />
      <button type="button" data-testid="email-input">
        Enter
      </button>
    </div>

  )
}

export default Login;
