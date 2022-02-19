import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { getMovieGenres } from '../../services/apiTmdb';
import { FavoriteMovie } from './fav-movie';

// test('Render GenredMovie', () => {
//   render(<GenredMovie />);

//   const figure = screen.getByTestId('figure');
//   const figcaption = screen.getByTestId('figcaption');
//   const poster = screen.getByTestId('poster');
//   expect(figcaption).toBeInTheDocument();
//   expect(figure).toBeInTheDocument();
//   expect(poster.src).toContain('https://image.tmdb.org/t/p/w1280/');
// });

const movie = {
  data: {
    results: [
      {
        id: 555,
        title: 'The Amazing Spider',
        poster_path: '/ay7xwXn1G9fzX9TUBlkGA584rGi.jpg',
      },
    ],
  },
};

jest.mock('../../services/apiTmdb');

const component = (
  <BrowserRouter>
    <FavoriteMovie movie={movie} />
  </BrowserRouter>
);

describe('Testing charge FavoriteMovie component', () => {
  beforeEach(() => {
    getMovieGenres.mockResolvedValue(movie);
  });
  test('movie update button', () => {
    render(component);

    expect(screen.getByText(/Update/i)).toBeInTheDocument();
  });
  test('movie runtime-', () => {
    render(component);

    expect(screen.getByText(/min/i)).toBeInTheDocument();
  });
});
