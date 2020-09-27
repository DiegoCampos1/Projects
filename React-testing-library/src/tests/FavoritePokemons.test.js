import React from 'react';
import { cleanup } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import { FavoritePokemons } from '../components';
import pokemons from '../data';

describe('Testes no arquivo FavoritePokenons', () => {
  afterEach(cleanup);

  test('Caso a pessoa não tenha pokémons favoritos, a mensagem No favorite pokemon found deve aparecer na tela', () => {
    const { getByText } = renderWithRouter(<FavoritePokemons pokemons={[]} />);
    expect(getByText(/No favorite p/i)).toBeInTheDocument();
  });

  test('A página não deve exibir nenhum card de pokémon não favoritado', () => {
    const { queryByText } = renderWithRouter(<FavoritePokemons pokemons={pokemons.slice(0, 4)} />);
    expect(queryByText(/Alakazam/i)).not.toBeInTheDocument();
    expect(queryByText(/Snorlax/i)).not.toBeInTheDocument();
  });

  test('A página deve exibir todos os cards de pokémons favoritados;', () => {
    const { queryByText } = renderWithRouter(<FavoritePokemons pokemons={pokemons.slice(0, 4)} />);
    expect(queryByText(/Pikachu/i)).toBeInTheDocument();
  });
});
