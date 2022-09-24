import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../helpers/renderWithRouter';
import App from '../App';
import mockStorage from '../helpers/mockStorage';

const emailUser = 'test@test.com';

describe('testando a page "Login"', () => {
  test('testando se o usuario consegue escrever nos inputs', () => {
    renderWithRouter(<App />);

    const email = screen.getByTestId('email-input');
    const password = screen.getByTestId('password-input');

    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();

    userEvent.type(email, emailUser);
    userEvent.type(password, '1234567');

    console.log(email);
    expect(email.value).toBe(emailUser);
    expect(password.value).toBe('1234567');
  });
  test(
    'testando se quando o usuario clica no botão as informações dele é salva no local storage',
    () => {
      renderWithRouter(<App />);

      const email = screen.getByTestId('email-input');
      const password = screen.getByTestId('password-input');
      const button = screen.getByTestId('login-submit-btn');

      userEvent.type(email, emailUser);
      userEvent.type(password, '1234567');

      expect(button).toBeEnabled();
      userEvent.click(button);

      expect(localStorage.getItem('user')).toEqual(JSON.stringify(mockStorage));
    },
  );
});
