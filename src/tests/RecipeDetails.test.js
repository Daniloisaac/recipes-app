import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../helpers/renderWithRouter';
import App from '../App';
import meals from '../../cypress/mocks/meals';
// import drinks from '../../cypress/mocks/drinks';

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

  test('testando se o usuário consegue escrever nos inputs', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(meals),

    });
    // global.fetch = jest.fn().mockResolvedValue({
    //   json: jest.fn().mockResolvedValue(drinks),

    // });
    renderWithRouter(<App />);
    const inputEmail = screen.getByTestId('email-input');
    const inputPassword = screen.getByTestId('password-input');

    userEvent.type(inputEmail, emailOfUser);
    userEvent.type(inputPassword, passwordOfUser);

    expect(inputEmail.value).toBe(emailOfUser);
    expect(inputPassword.value).toBe(passwordOfUser);
    const buttonSubmit = screen.getByTestId('login-submit-btn');
    userEvent.click(buttonSubmit);
    const recipe = await screen.findByTestId('0-recipe-card');
    userEvent.click(recipe);
    const imgRecipe = screen.getByTestId('recipe-photo');
    expect(imgRecipe).toBeInTheDocument();
  });
});
