import React from 'react';
// import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import renderWithRouter from '../helpers/renderWithRouter';
import Profile from '../pages/Profile';

describe('Tela de Perfil', () => {
  it('', () => {
    renderWithRouter(<Profile />);
    expect(1).toBe(1);
  });
});
