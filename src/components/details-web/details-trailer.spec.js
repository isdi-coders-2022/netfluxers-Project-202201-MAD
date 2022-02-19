import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { getCast } from '../../services/apiTmdb';
import { DetailsTrailer } from './details-trailer';

const trailer = {
  data: {
    results: [
      {
        key: '6JnN1DmbqoU',
      },
    ],
  },
};

jest.mock('../../services/apiTmdb.js');

describe('first getMovieGenres from API', () => {
  beforeEach(() => {
    getCast.mockResolvedValue(trailer);
  });
  test('should show Genres-', () => {
    render(
      <BrowserRouter>
        <DetailsTrailer id="819" />
      </BrowserRouter>
    );

    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });
});
