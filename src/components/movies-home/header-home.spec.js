import { render, screen } from '@testing-library/react';
import { HeaderHome } from './header-home';

test('Render HeaderHome', () => {
  render(<HeaderHome />);

  const buttonWatchTrailer = screen.getByText(/Watch Trailer/i);
  const article = screen.getByTestId('article');
  expect(buttonWatchTrailer).toBeInTheDocument();
  expect(article).toBeInTheDocument();
});
