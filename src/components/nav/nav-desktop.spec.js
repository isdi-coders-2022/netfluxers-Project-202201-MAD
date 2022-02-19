import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { NavDesktop } from './nav-desktop';

test('renders Menu list', () => {
  const navOptions = [
    { path: '/', label: 'Home' },
    { path: '/favorites-list', label: 'Favorites' },
  ];
  render(
    <BrowserRouter>
      <NavDesktop navOptions={navOptions} />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});
