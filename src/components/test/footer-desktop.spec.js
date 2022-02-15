import { render, screen } from '@testing-library/react';
import { FooterDesktop } from '../footer-desktop';

test('Render FooterDesktop', () => {
  render(<FooterDesktop />);
  const elementFollow = screen.getByText(/Follow Us/i);
  const elementNetflux = screen.getByText(/NETFLUX/i);
  const elementTrademark = screen.getByText(/Trademark/i);
  expect(elementFollow).toBeInTheDocument();
  expect(elementNetflux).toBeInTheDocument();
  expect(elementTrademark).toBeInTheDocument();
  
});
