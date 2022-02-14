import { render, screen } from '@testing-library/react';
import { NavMobile } from './nav-mobile';

test('Render footer desktop', () => {
  render(<NavMobile />);
  const elementFollow = screen.getByText(/Follow Us/i);

  expect(elementFollow).toBeInTheDocument();
});
