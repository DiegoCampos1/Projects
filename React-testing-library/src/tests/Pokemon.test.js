import React from 'react';
import { cleanup, fireEvent } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import App from '../App';
import pokemons from '../data';

describe('Teste Pokemon', () => {
  afterEach(cleanup);
  test('retorna um card', () => {
    const { getByTestId } = renderWithRouter(<App />);
    expect(getByTestId('pokemon-name')).toBeInTheDocument();
    expect(getByTestId('pokemonType')).toBeInTheDocument();
    expect(getByTestId('pokemon-weight')).toBeInTheDocument();
    expect(getByTestId('pokemon-name').innerHTML).toBe(pokemons[0].name);
    expect(getByTestId('pokemonType').innerHTML).toBe(pokemons[0].type);
  });

  test('texto com peso médio', () => {
    const { getByTestId } = renderWithRouter(<App />);
    expect(getByTestId('pokemon-weight').innerHTML).toBe(
      `Average weight:${pokemons[0].averageWeight.value}${pokemons[0].averageWeight.measurementUnit}`,
    );
  });

  test('testar imagem do pokemon', () => {
    const { getByRole } = renderWithRouter(<App />);
    const image = getByRole('img');
    expect(image.src).toBe(pokemons[0].image);
    expect(image.alt).toBe(`${pokemons[0].name} sprite`);
  });

  test('Testar rota', () => {
    const { history, getByText } = renderWithRouter(<App />);
    const link = getByText(/More Details/i);
    expect(link.href).toMatch(`/pokemons/${pokemons[0].id}`);
    fireEvent.click(link);
    const pathname = history.location.pathname;
    expect(pathname).toBe(`/pokemons/${pokemons[0].id}`);
  });

  test('icone de estrela', () => {
    const { getByText, getByLabelText, getAllByRole } = renderWithRouter(<App />);
    const link = getByText(/More Details/i);
    fireEvent.click(link);
    const label = getByLabelText('Pokémon favoritado?');
    fireEvent.click(label);
    const images = getAllByRole('img');
    const star = images.filter((img) => img.src.includes('/star-icon.svg'));
    expect(star[0].alt).toBe(`${pokemons[0].name} is marked as favorite`);
    expect(star.length).toBeGreaterThan(0);
  });
});
