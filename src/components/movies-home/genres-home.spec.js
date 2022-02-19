import { prettyDOM, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { getMovieGenres } from '../../services/apiTmdb';
import { GenredMovie } from './genres-home';

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

describe('first getMovieGenres from API', () => {
  beforeEach(() => {
    getMovieGenres.mockResolvedValue(movie);
  });
  test('should show Genres-', () => {
    const { container } = render(
      <BrowserRouter>
        <GenredMovie genred="80" />
      </BrowserRouter>
    );
    console.log(prettyDOM(container));
    expect(screen.getByText(/The Amazing Spider/i)).toBeInTheDocument();
  });
});
