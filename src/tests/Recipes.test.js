import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../helpers/renderWithRouter';
import Drinks from '../pages/Drinks';
import drinks from '../../cypress/mocks/drinks';
import drinkCategory from '../../cypress/mocks/drinkCategories';
import Meals from '../pages/Meals';
import meals from '../../cypress/mocks/meals';
import mealsCategory from '../../cypress/mocks/mealCategories';

const checkButtons = (buttons) => {
  buttons.then((btn) => {
    expect(btn).toHaveLength(5);
    btn.forEach((button) => {
      expect(button).toBeInTheDocument();
    });
  });
};

describe('Testando a rota meals', () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockResolvedValue({
      json: () => Promise.resolve(drinks),
    });

    global.fetch = jest.fn().mockResolvedValue({
      json: () => Promise.resolve(drinkCategory),
    });

    global.fetch = jest.fn().mockResolvedValue({
      json: () => Promise.resolve(meals),
    });

    global.fetch = jest.fn().mockResolvedValue({
      json: () => Promise.resolve(mealsCategory),
    });
  });

  it('Testando se os botões de categoria estão na tela', () => {
    renderWithRouter(<Drinks />);
    const buttons = screen.findAllByRole('button');
    checkButtons(buttons);
  });

  it('Testando se o CardRecipes de categoria estão na tela', async () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(drinks),
    });
    renderWithRouter(<Drinks />);

    const image = await screen.findByTestId('2-recipe-card');
    expect(image).toBeInTheDocument();
  });

  it('Testando se os botões de categoria estão na tela', () => {
    renderWithRouter(<Meals />);
    const buttons = screen.findAllByRole('button');
    checkButtons(buttons);
  });

  it('Testando se o CardRecipes de categoria estão na tela', async () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(meals),
    });
    renderWithRouter(<Meals />);

    const image = await screen.findByTestId('2-recipe-card');
    expect(image).toBeInTheDocument();
  });
});
