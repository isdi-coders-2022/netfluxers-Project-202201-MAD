import { useAuth0 } from '@auth0/auth0-react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LogoutButton from './logoutButton';

jest.mock('@auth0/auth0-react');

const user = {
  email: 'jesusrodriguezgonzalezgr@gmail.com',
  email_verified: true,
  family_name: 'Rodriguez',
  given_name: 'Jesus',
  locale: 'es',
  name: 'Jesus Rodriguez',
  nickname: 'jesusrodriguezgonzalezgr',
  picture:
    'https://lh3.googleusercontent.com/a/AATXAJzw0OHKBHbuuUTxwYItFSo94CykoMZ3XQg-4YGX=s96-c',
  sub: 'google-oauth2|118111786459417766034',
  updated_at: '2022-02-19T14:40:50.296Z',
};

describe('Given the LoginButton component', () => {
  beforeEach(() => {
    useAuth0.mockReturnValue({
      isAuthenticated: true,
      user,
      logout: jest.fn(),
      loginWithRedirect: jest.fn(),
    });
  });

  test('Testing render component', () => {
    render(<LogoutButton />);
    expect(screen.getByText(/Log Out/)).toBeInTheDocument();
  });

  test('Testting click button Logout', () => {
    render(<LogoutButton />);
    const button = screen.getByRole('button');
    userEvent.click(button);
    expect(useAuth0().logout).toHaveBeenCalled();
  });
});
