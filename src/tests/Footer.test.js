import React from 'react';
import { screen } from '@testing-library/react';
import Drinks from '../pages/Drinks';
import renderWithRouter from '../helpers/renderWithRouter';

describe('testando o componente "Footer"', () => {
  test('testando se as imagens de drink e meals estão na tela', () => {
    renderWithRouter(<Drinks />);

    const imgDrink = screen.getByTestId('drinks-bottom-btn');
    const imgMeals = screen.getByTestId('meals-bottom-btn');

    expect(imgDrink).toBeInTheDocument();
    expect(imgMeals).toBeInTheDocument();
  });
});
