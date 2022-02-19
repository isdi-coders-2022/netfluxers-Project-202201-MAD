import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { getCast } from '../../services/apiTmdb';
import { DetailsCast } from './details-cast';

const actor = {
  data: {
    cast: [
      {
        name: 'Edward Norton',
        profile_path: '/5XBzD5WuTyVQZeS4VI25z2moMeY.jpg',
      },
    ],
  },
};

jest.mock('../../services/apiTmdb.js');

describe('first getMovieGenres from API', () => {
  beforeEach(() => {
    getCast.mockResolvedValue(actor);
  });
  test('should show Genres-', () => {
    render(
      <BrowserRouter>
        <DetailsCast id="819" />
      </BrowserRouter>
    );

    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });
});
