import { render, screen } from '@testing-library/react';
import { FavoriteMovie } from '../fav-movie';

test('Render FavoriteMovie', () => {
  render(<FavoriteMovie />);
  const title = screen.getByText(/james bond collection/i);
  expect (title).toBeInTheDocument();
  const image = screen.getByRole('img');
  expect (image).toBeInTheDocument();
  const genero = screen.getByText(/crime/i);
  expect (genero).toBeInTheDocument();
  const time = screen.getByText(/2h 30min/i);
  expect (time).toBeInTheDocument();

});