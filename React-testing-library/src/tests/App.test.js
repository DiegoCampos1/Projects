import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, cleanup, fireEvent } from '@testing-library/react';
import App from '../App';
import renderWithRouter from './renderWithRouter';

test('renders a reading with the text `Pokédex`', () => {
  const { getByText } = render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );
  const heading = getByText(/Pokédex/i);
  expect(heading).toBeInTheDocument();
});

describe('Testes do App.js', () => {
  afterEach(cleanup);

  test('Ao carregar a aplicação no caminho de URL “/”, a página principal da Pokédex deve ser mostrada', () => {
    const { history } = renderWithRouter(<App />);
    const pathname = history.location.pathname;
    expect(pathname).toBe('/');
  });

  test('Ao clicar no link "Home" na barra de navegação, a aplicação deve ser redirecionada para a página inicial, na URL "/"', () => {
    const { getByText, history } = renderWithRouter(<App />);
    expect(getByText(/Home/i)).toBeInTheDocument();
    fireEvent.click(getByText(/Home/i));
    const pathname = history.location.pathname;
    expect(pathname).toBe('/');
  });

  test('Ao clicar no link "About" na barra de navegação, a aplicação deve ser redirecionada para a página de About, na URL "/about"', () => {
    const { getByText, history } = renderWithRouter(<App />);
    expect(getByText(/About/i)).toBeInTheDocument();
    fireEvent.click(getByText(/About/i));
    const pathname = history.location.pathname;
    expect(pathname).toBe('/about');
  });

  test('Ao clicar no link "Favorite Pokémons" na barra de navegação, a aplicação deve ser redirecionada para a página de pokémons favoritados, na URL "/favorites"', () => {
    const { getByText, history } = renderWithRouter(<App />);
    expect(getByText(/Favorite Pokémons/i)).toBeInTheDocument();
    fireEvent.click(getByText(/Favorite Pokémons/i));
    const pathname = history.location.pathname;
    expect(pathname).toBe('/favorites');
  });

  test('Testar renderização do Not Found', () => {
    const { getByText, history } = renderWithRouter(<App />);
    history.push('/pagina/que-nao-existe/');
    const noMatch = getByText(/not found/i);
    expect(noMatch).toBeInTheDocument();
  });
});
