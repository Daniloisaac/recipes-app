import React from 'react';
import { screen } from '@testing-library/react';
import DoneRecipes from '../pages/DoneRecipes';
import renderWithRouter from '../helpers/renderWithRouter';
import DoneMock from './__mocks__/DoneMock';

describe('testando a tela Done Recipes', () => {
  test('testa se há o butao all', () => {
    renderWithRouter(<DoneRecipes />);
    const all = screen.getByTestId(/filter-by-all-btn/i);
    expect(all).toBeInTheDocument();
  });
  test('testa se há o butao meal', () => {
    renderWithRouter(<DoneRecipes />);
    const meal = screen.getByTestId(/filter-by-meal-btn/i);
    expect(meal).toBeInTheDocument();
  });
  test('testa se há o butao drink', () => {
    renderWithRouter(<DoneRecipes />);
    const drink = screen.getByTestId(/filter-by-drink-btn/i);
    expect(drink).toBeInTheDocument();
  });
  test('testa se há um titulo', () => {
    renderWithRouter(<DoneRecipes />);
    const titulo = screen.getByTestId(/page-title/i);
    expect(titulo).toBeInTheDocument();
  });
});

describe('testando a tela Done Recipes com Mock do localStorage', () => {
  beforeEach(() => {
    localStorage.setItem('doneRecipes', JSON.stringify(DoneMock));
  });
  test('testa se há o texto no topo da comida', () => {
    renderWithRouter(<DoneRecipes />);
    const titulomeal = screen.getByTestId(/0-horizontal-top-text/i);
    expect(titulomeal).toBeInTheDocument();
  });
  test('testa se há o nome da comida', () => {
    renderWithRouter(<DoneRecipes />);
    const namemeal = screen.getByTestId(/0-horizontal-name/i);
    expect(namemeal).toBeInTheDocument();
  });
  test('testa se há imagem da comida', () => {
    renderWithRouter(<DoneRecipes />);
    const imagemeal = screen.getByTestId(/0-horizontal-image/i);
    expect(imagemeal).toBeInTheDocument();
  });
  test('testa se há botao de compartilhar da  comida', () => {
    renderWithRouter(<DoneRecipes />);
    const sharemeal = screen.getByTestId(/0-horizontal-share-btn/i);
    expect(sharemeal).toBeInTheDocument();
  });
  test('testa se há data da comida', () => {
    renderWithRouter(<DoneRecipes />);
    const datemeal = screen.getByTestId(/0-horizontal-done-date/i);
    expect(datemeal).toBeInTheDocument();
  });
  test('testa se há tag 1 da comida', () => {
    renderWithRouter(<DoneRecipes />);
    const tagmeal = screen.getByTestId(/0-Pasta-horizontal-tag/i);
    expect(tagmeal).toBeInTheDocument();
  });
  test('testa se há tag 2 da comida', () => {
    renderWithRouter(<DoneRecipes />);
    const tagmeal2 = screen.getByTestId(/0-Curry-horizontal-tag/i);
    expect(tagmeal2).toBeInTheDocument();
  });
});
