import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { getDetail } from '../../services/apiTmdb';
import { HeaderHome } from './header-home';

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
    getDetail.mockResolvedValue(movie);
  });
  test('should show Genres-', () => {
    render(
      <BrowserRouter>
        <HeaderHome />
      </BrowserRouter>
    );
    expect(screen.getByText(/Watch Trailer/i)).toBeInTheDocument();
  });
});
