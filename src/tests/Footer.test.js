import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

describe('testando o componente "Footer"', () => {
  test('Farewell, front-end', () => {
    render(<App />);
  });
});
