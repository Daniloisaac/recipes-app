import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Drinks from '../pages/Drinks';
import Meals from '../pages/Meals';
import renderWithRouter from '../helpers/renderWithRouter';
import mockMargarita from './__mocks__/getByNameMargarita.json';

const imgTopBtn = 'search-top-btn';
const search = 'search-input';
const btnExecSearch = 'exec-search-btn';

describe('Testando o componente SearchBar', () => {
  afterEach(() => { global.fetch.mockClear(); });
  it('Se é redirecionado quando retorna apenas 1 valor da API', () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue([{ name: 'Arrabiata' }]),
    });
    renderWithRouter(<Meals />);
    const iconSearch = screen.getByTestId(imgTopBtn);
    expect(iconSearch).toBeInTheDocument();

    userEvent.click(iconSearch);
    const searchInput = screen.getByTestId(search);
    const inputName = screen.getByLabelText(/name/i);
    const buttonSearch = screen.getByTestId(btnExecSearch);
    expect(buttonSearch).toBeInTheDocument();

    userEvent.type(searchInput, 'Arrabiata');
    expect(searchInput).toHaveDisplayValue('Arrabiata');
    userEvent.click(inputName);
    userEvent.click(buttonSearch);
  });

  it('Testando o First Letter', () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockMargarita),
    });
    renderWithRouter(<Meals />);
    const iconSearch = screen.getByTestId(imgTopBtn);
    expect(iconSearch).toBeInTheDocument();

    userEvent.click(iconSearch);
    const searchInput = screen.getByTestId(search);
    const inputFirstLetter = screen.getByLabelText(/first letter/i);
    const buttonSearch = screen.getByTestId(btnExecSearch);
    expect(buttonSearch).toBeInTheDocument();

    userEvent.type(searchInput, '');
    expect(searchInput).toHaveDisplayValue('');
    userEvent.click(inputFirstLetter);
    userEvent.click(buttonSearch);
  });

  it('Testando as ações de radio Ingredient, e value "Gin"', () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockMargarita),
    });
    renderWithRouter(<Drinks />);
    const iconSearch = screen.getByTestId(imgTopBtn);
    expect(iconSearch).toBeInTheDocument();

    userEvent.click(iconSearch);

    const searchInput = screen.getByTestId(search);
    expect(searchInput).toBeInTheDocument();

    const inputIngredient = screen.getByLabelText(/ingredient/i);
    const inputName = screen.getByLabelText(/name/i);
    const inputFirstLetter = screen.getByLabelText(/first letter/i);

    expect(inputIngredient).toBeInTheDocument();
    expect(inputName).toBeInTheDocument();
    expect(inputFirstLetter).toBeInTheDocument();

    const buttonSearch = screen.getByTestId(btnExecSearch);
    expect(buttonSearch).toBeInTheDocument();
    userEvent.click(buttonSearch);

    userEvent.type(searchInput, 'gin');

    expect(searchInput).toHaveDisplayValue('gin');
    userEvent.click(inputIngredient);
    userEvent.click(buttonSearch);
  });

  it('Testando as ações de radio Name, e value "Adam"', () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockMargarita),
    });
    renderWithRouter(<Drinks />);
    const iconSearch = screen.getByTestId(imgTopBtn);
    expect(iconSearch).toBeInTheDocument();

    userEvent.click(iconSearch);

    const searchInput = screen.getByTestId(search);
    expect(searchInput).toBeInTheDocument();

    const inputIngredient = screen.getByLabelText(/ingredient/i);
    const inputName = screen.getByLabelText(/name/i);
    const inputFirstLetter = screen.getByLabelText(/first letter/i);

    expect(inputIngredient).toBeInTheDocument();
    expect(inputName).toBeInTheDocument();
    expect(inputFirstLetter).toBeInTheDocument();

    const buttonSearch = screen.getByTestId(btnExecSearch);
    expect(buttonSearch).toBeInTheDocument();
    userEvent.click(buttonSearch);

    userEvent.type(searchInput, 'Adam');
    expect(searchInput).toHaveDisplayValue('Adam');
    userEvent.click(inputName);
    userEvent.click(buttonSearch);
  });

  it('Radio First Letter com a entrada de 1 caractere', () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockMargarita),
    });
    renderWithRouter(<Drinks />);
    const iconSearch = screen.getByTestId(imgTopBtn);
    expect(iconSearch).toBeInTheDocument();

    userEvent.click(iconSearch);

    const searchInput = screen.getByTestId(search);
    expect(searchInput).toBeInTheDocument();

    const inputIngredient = screen.getByLabelText(/ingredient/i);
    const inputName = screen.getByLabelText(/name/i);
    const inputFirstLetter = screen.getByLabelText(/first letter/i);

    expect(inputIngredient).toBeInTheDocument();
    expect(inputName).toBeInTheDocument();
    expect(inputFirstLetter).toBeInTheDocument();

    const buttonSearch = screen.getByTestId(btnExecSearch);
    expect(buttonSearch).toBeInTheDocument();
    userEvent.click(buttonSearch);

    userEvent.type(searchInput, 'a');
    expect(searchInput).toHaveDisplayValue('a');
    userEvent.click(inputFirstLetter);
    userEvent.click(buttonSearch);
  });

  it('Testando os Inputs', async () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockMargarita),
    });
    renderWithRouter(<Drinks />);
    const iconSearch = screen.getByTestId(imgTopBtn);
    expect(iconSearch).toBeInTheDocument();

    userEvent.click(iconSearch);

    const searchInput = screen.getByTestId(search);
    expect(searchInput).toBeInTheDocument();

    const inputIngredient = screen.getByLabelText(/ingredient/i);
    const inputName = screen.getByLabelText(/name/i);
    const inputFirstLetter = screen.getByLabelText(/first letter/i);

    expect(inputIngredient).toBeInTheDocument();
    expect(inputName).toBeInTheDocument();
    expect(inputFirstLetter).toBeInTheDocument();

    const buttonSearch = screen.getByTestId(btnExecSearch);
    expect(buttonSearch).toBeInTheDocument();
    userEvent.click(buttonSearch);

    userEvent.type(searchInput, 'xablau');
    expect(searchInput).toHaveDisplayValue('xablau');
    userEvent.click(inputName);
    userEvent.click(buttonSearch);
  });

  it('Input Search Vazio', async () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue([]),
    });
    renderWithRouter(<Drinks />);
    const iconSearch = screen.getByTestId(imgTopBtn);
    expect(iconSearch).toBeInTheDocument();

    userEvent.click(iconSearch);

    const searchInput = screen.getByTestId(search);
    expect(searchInput).toBeInTheDocument();

    const inputIngredient = screen.getByLabelText(/ingredient/i);
    const inputName = screen.getByLabelText(/name/i);
    const inputFirstLetter = screen.getByLabelText(/first letter/i);

    expect(inputIngredient).toBeInTheDocument();
    expect(inputName).toBeInTheDocument();
    expect(inputFirstLetter).toBeInTheDocument();

    const buttonSearch = screen.getByTestId(btnExecSearch);
    expect(buttonSearch).toBeInTheDocument();
    userEvent.click(buttonSearch);

    userEvent.type(searchInput, '');
    expect(searchInput).toHaveDisplayValue('');
    userEvent.click(inputIngredient);
    userEvent.click(buttonSearch);

    waitFor(() => {
      jest.spyOn(global, 'fetch');
      global.fetch.mockResolvedValue({
        json: jest.fn().mockResolvedValue([]),
      });

      jest.spyOn(global, 'alert');
      global.alert.mockResolvedValue('Sorry, we haven\'t found any recipes for these filters.');
    });
  });
});
