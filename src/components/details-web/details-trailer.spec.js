import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { getTrailer } from '../../services/apiTmdb';
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

describe('first getTrailer from API', () => {
  beforeEach(() => {
    getTrailer.mockResolvedValue(trailer);
  });
  test('should show Trailer text-', async () => {
    render(
      <BrowserRouter>
        <DetailsTrailer id="819" />
      </BrowserRouter>
    );

    expect(await screen.findByText(/Trailer/i)).toBeInTheDocument();
  });
});
