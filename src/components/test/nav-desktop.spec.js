import { render, screen } from '@testing-library/react';
import { NavDesktop } from '../nav-desktop';

test('Render NavDesktop', () => {
  render(<NavDesktop />);
  const liHome = screen.getByText(/Home/i);
  const liFavorites = screen.getByText(/Favorites/i);
  const liAccount = screen.getByText(/Account/i);
  expect(liHome).toBeInTheDocument();
  expect(liFavorites).toBeInTheDocument();
  expect(liAccount).toBeInTheDocument();
});
