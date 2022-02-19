import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Context } from '../contexto/context-provider';
import { ContainerHome } from './container-home';

const objMoviesContext = {
  moviesFav: [
    {
      id: 1,
      idmovie: 597208,
      nickname: 'jesusrodriguezgonzalezgr',
      original_title: 'Nightmare Alley',
      poster_path: '/680klE0dIreQQOyWKFgNnCAJtws.jpg',
      runtime: 150,
      user_average: 1,
      vote_average: 7.2,
    },
  ],
};

describe('first', () => {
  test('should render the components in Home', () => {
    render(
      <BrowserRouter>
        <Context.Provider value={objMoviesContext}>
          <ContainerHome />
        </Context.Provider>
      </BrowserRouter>
    );
    expect(screen.getByText(/New releases/i)).toBeInTheDocument();
    expect(screen.getByText(/Comedy/i)).toBeInTheDocument();
    expect(screen.getByText(/Watch Trailer/i)).toBeDefined();
  });
});
