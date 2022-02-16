import { render, screen } from '@testing-library/react';
import { GenredMovie } from './genres-home';

test('Render GenredMovie', () => {
  render(<GenredMovie />);

  // const figure = screen.getByTestId('figure');
  // const figcaption = screen.getByTestId('figcaption');
  const poster = screen.getByTestId('poster');
  // expect(figcaption).toBeInTheDocument();
  // expect(figure).toBeInTheDocument();
  expect(poster.src).toContain('https://image.tmdb.org/t/p/w1280/');
});
