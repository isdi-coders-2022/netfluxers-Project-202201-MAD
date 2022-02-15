import { render, screen } from '@testing-library/react';
import { NavMobile } from './nav-mobile';

test('Render NavMobile', () => {
  render(<NavMobile />);
  const iconHome = screen.getByAltText(/icon-home/i);
  const iconFavorites = screen.getByAltText(/icon-favorites/i);
  const iconAccount = screen.getByAltText(/icon-account/i);
  expect(iconHome).toBeInTheDocument();
  expect(iconFavorites).toBeInTheDocument();
  expect(iconAccount).toBeInTheDocument();
});
