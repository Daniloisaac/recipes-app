import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Drinks from '../pages/Drinks';
import renderWithRouter from '../helpers/renderWithRouter';

describe('Testando o componente SearchBar', () => {
  it('Testando os Inputs', () => {
    renderWithRouter(<Drinks />);
    const iconSearch = screen.getByTestId('search-top-btn');
    expect(iconSearch).toBeInTheDocument();

    userEvent.click(iconSearch);

    const searchInput = screen.getByTestId('search-input');
    expect(searchInput).toBeInTheDocument();

    const inputIngredient = screen.getByLabelText(/ingredient/i);
    const inputName = screen.getByLabelText(/name/i);
    const inputFirstLetter = screen.getByLabelText(/first letter/i);

    expect(inputIngredient).toBeInTheDocument();
    expect(inputName).toBeInTheDocument();
    expect(inputFirstLetter).toBeInTheDocument();

    const buttonSearch = screen.getByTestId('exec-search-btn');
    expect(buttonSearch).toBeInTheDocument();
    userEvent.click(buttonSearch);

    fireEvent.change(searchInput, { target: { value: 'gin' } });
    expect(searchInput).toHaveDisplayValue('gin');
    userEvent.click(inputIngredient);
    userEvent.click(buttonSearch);

    fireEvent.change(searchInput, { target: { value: 'Adam' } });
    expect(searchInput).toHaveDisplayValue('Adam');
    userEvent.click(inputName);
    userEvent.click(buttonSearch);

    fireEvent.change(searchInput, { target: { value: 'a' } });
    expect(searchInput).toHaveDisplayValue('a');
    userEvent.click(inputFirstLetter);
    userEvent.click(buttonSearch);

    fireEvent.change(searchInput, { target: { value: 'asss' } });
    expect(searchInput).toHaveDisplayValue('asss');
    userEvent.click(inputFirstLetter);
    userEvent.click(buttonSearch);

    fireEvent.change(searchInput, { target: { value: '' } });
    expect(searchInput).toHaveDisplayValue('');
    userEvent.click(inputIngredient);
    userEvent.click(buttonSearch);

    fireEvent.change(searchInput, { target: { value: '' } });
    expect(searchInput).toHaveDisplayValue('');
    userEvent.click(inputName);
    userEvent.click(buttonSearch);
  });
});
