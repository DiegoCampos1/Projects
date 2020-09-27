import React from 'react';
import { cleanup, fireEvent } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import App from '../App';
import pokemons from '../data';

describe('Teste Pokemon Details', () => {
  afterEach(cleanup);

  test('Testar h2, summary', () => {
    const {
      getByText,
      queryAllByText,
      getAllByAltText,
      getAllByRole,
      getByLabelText,
    } = renderWithRouter(<App />);
    const link = getByText(/More Details/i);
    fireEvent.click(link);
    const h2 = Array.from(document.querySelectorAll('h2'));
    const summary = ' Summary ';
    const summaryExist = h2.some((item) => item.innerHTML === summary);
    expect(summaryExist).toBe(true);
    expect(getByText(`${pokemons[0].name} Details`)).toBeInTheDocument();
    const moreDetails = queryAllByText(/More Details/i);
    expect(moreDetails.length).toBe(0);
    expect(getByText(pokemons[0].summary)).toBeInTheDocument();
    expect(getByText(`Game Locations of ${pokemons[0].name}`)).toBeInTheDocument();
    const habitats = document.querySelector('.pokemon-habitat');
    expect(habitats.childElementCount).toBe(pokemons[0].foundAt.length);
    pokemons[0].foundAt.map(({ location, map }) => {
      expect(getByText(location)).toBeInTheDocument();
      expect(getAllByAltText(`${pokemons[0].name} location`).length).toBeGreaterThan(0);
      const img = Array.from(getAllByRole('img'));
      expect(img.some((imagem) => imagem.src === map)).toBe(true);
      return null;
    });
    const favorite = getByLabelText('Pokémon favoritado?');
    fireEvent.click(favorite);
    const images = Array.from(getAllByRole('img'));
    expect(images.length).toEqual(4);
    fireEvent.click(favorite);
    const images2 = Array.from(getAllByRole('img'));
    expect(images2.length).toEqual(images.length - 1);
  });
});
