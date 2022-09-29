import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../helpers/renderWithRouter';
import App from '../App';

const emailOfUser = 'test@test.com';
const passwordOfUser = '1234567';

describe('testando a page "Login"', () => {
  test('testando se o usuário consegue escrever nos inputs', () => {
    renderWithRouter(<App />);

    const inputEmail = screen.getByTestId('email-input');
    const inputPassword = screen.getByTestId('password-input');

    userEvent.type(inputEmail, emailOfUser);
    userEvent.type(inputPassword, passwordOfUser);

    expect(inputEmail.value).toBe(emailOfUser);
    expect(inputPassword.value).toBe(passwordOfUser);
  });
});
