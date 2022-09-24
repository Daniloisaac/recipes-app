import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../helpers/renderWithRouter';
import App from '../App';
import mockStorage from '../helpers/mockStorage';

const emailOfUser = 'test@test.com';
const passwordOfUser = '1234567';

describe('testando a page "Login"', () => {
  test('testando se o usuario consegue escrever nos inputs', () => {
    renderWithRouter(<App />);

    const inputEmail = screen.getByTestId('email-input');
    const inputPassword = screen.getByTestId('password-input');

    userEvent.type(inputEmail, emailOfUser);
    userEvent.type(inputPassword, passwordOfUser);

    expect(inputEmail.value).toBe(emailOfUser);
    expect(inputPassword.value).toBe(passwordOfUser);
  });
  test(
    'testando se quando o usuario clica no botão as informações dele é salva no local storage',
    () => {
      renderWithRouter(<App />);

      const inputEmail = screen.getByTestId('email-input');
      const inputPassword = screen.getByTestId('password-input');
      const buttonLogin = screen.getByTestId('login-submit-btn');

      userEvent.type(inputEmail, emailOfUser);
      userEvent.type(inputPassword, passwordOfUser);
      userEvent.click(buttonLogin);

      expect(localStorage.getItem('user')).toEqual(JSON.stringify(mockStorage));
    },
  );
});
