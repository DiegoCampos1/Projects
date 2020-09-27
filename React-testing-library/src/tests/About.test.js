import React from 'react';
import { cleanup } from '@testing-library/react';
import About from '../components/About';
import renderWithRouter from './renderWithRouter';

describe('Testes do About', () => {
  afterEach(cleanup);

  test('A página "About" deve exibir informações sobre a Pokédex', () => {
    const { getByText } = renderWithRouter(<About />);
    const pokeInfo = getByText(/digital encliclopedia containing all Pokémons/i);
    expect(pokeInfo).toBeInTheDocument();
  });

  test('A página deve conter um heading h2 com o texto About Pokédex', () => {
    const { getByRole } = renderWithRouter(<About />);
    const h2 = getByRole('heading');
    expect(h2).toHaveTextContent(/About Pokédex/i);
  });

  test('Testar parágrafos', () => {
    renderWithRouter(<About />);
    const paragraphs = document.querySelectorAll('p');
    expect(paragraphs.length).toBe(2);
  });

  test('A página deve conter a seguinte imagem de uma Pokédex: https://cdn.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png.', () => {
    const { getByRole } = renderWithRouter(<About />);
    const img = getByRole('img');
    expect(img.src).toBe(
      'https://cdn.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png',
    );
  });
});
