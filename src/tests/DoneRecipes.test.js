import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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
  test('testa se há imagem do perfil', () => {
    renderWithRouter(<DoneRecipes />);
    const perfil = screen.getByTestId(/profile-top-btn/i);
    expect(perfil).toBeInTheDocument();
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
  // drink abaixo
  test('testa se há o texto no topo da bebida', () => {
    renderWithRouter(<DoneRecipes />);
    const titulodrink = screen.getByTestId(/1-horizontal-top-text/i);
    expect(titulodrink).toBeInTheDocument();
  });
  test('testa se há o nome da bebida', () => {
    renderWithRouter(<DoneRecipes />);
    const namedrink = screen.getByTestId(/1-horizontal-name/i);
    expect(namedrink).toBeInTheDocument();
  });
  test('testa se há imagem da bebida', () => {
    renderWithRouter(<DoneRecipes />);
    const imagedrink = screen.getByTestId(/1-horizontal-image/i);
    expect(imagedrink).toBeInTheDocument();
  });
  test('testa se há botao de compartilhar da  bebida', () => {
    renderWithRouter(<DoneRecipes />);
    const sharedrink = screen.getByTestId(/1-horizontal-share-btn/i);
    expect(sharedrink).toBeInTheDocument();
  });
  test('testa se há data da bebida', () => {
    renderWithRouter(<DoneRecipes />);
    const datedrink = screen.getByTestId(/1-horizontal-done-date/i);
    expect(datedrink).toBeInTheDocument();
  });
  // testar os eventos de click
  test('testa se há comida após clickar em meal', () => {
    renderWithRouter(<DoneRecipes />);
    const meal = screen.getByTestId(/filter-by-meal-btn/i);
    userEvent.click(meal);
    const namemeal = screen.getByTestId(/0-horizontal-name/i);
    expect(namemeal).toBeInTheDocument();
  });
  test('testa se nao há bebida após clickar em meal', () => {
    renderWithRouter(<DoneRecipes />);
    const meal = screen.getByTestId(/filter-by-meal-btn/i);
    const datedrink = screen.getByTestId(/1-horizontal-done-date/i);
    userEvent.click(meal);
    expect(datedrink).not.toBeInTheDocument();
  });
  test('testa se há bebida após clickar em drink', () => {
    renderWithRouter(<DoneRecipes />);
    const drink = screen.getByTestId(/filter-by-drink-btn/i);
    userEvent.click(drink);
    const datedrink = screen.getByTestId(/0-horizontal-name/i);
    expect(datedrink).toBeInTheDocument();
  });
  test('testa se há bebida após clickar em all', () => {
    renderWithRouter(<DoneRecipes />);
    const drink = screen.getByTestId(/filter-by-drink-btn/i);
    userEvent.click(drink);
    const all = screen.getByTestId(/filter-by-all-btn/i);
    userEvent.click(all);
    const namedrink = screen.getByTestId(/1-horizontal-name/i);
    expect(namedrink).toBeInTheDocument();
  });
  test('testa se há comida após clickar em all', () => {
    renderWithRouter(<DoneRecipes />);
    const drink = screen.getByTestId(/filter-by-drink-btn/i);
    userEvent.click(drink);
    const all = screen.getByTestId(/filter-by-all-btn/i);
    userEvent.click(all);
    const namemeal = screen.getByTestId(/0-horizontal-name/i);
    expect(namemeal).toBeInTheDocument();
  });
});
