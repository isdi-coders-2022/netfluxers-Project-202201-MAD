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

describe('first getCast from API', () => {
  beforeEach(() => {
    getCast.mockResolvedValue(actor);
  });
  test('should show Name of cast-', async () => {
    render(
      <BrowserRouter>
        <DetailsCast id="819" />
      </BrowserRouter>
    );

    expect(await screen.findByText(/Edward Norton/i)).toBeInTheDocument();
  });
});
