import './style-nav-desktop.scss';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './loginButton';
import LogoutButton from './logoutButton';
import Profile from './isAuthenticated';

export function NavDesktop() {
  const { isAuthenticated } = useAuth0();
  return (
    <header>
      <div className="container">
        <div className="nav-container">
          <h1 className="header-title">NETFLUX</h1>
          <ul className="nav-container-desktop">
            <li className="nav-container-desktop__item">
              <Link to="*">Home</Link>
            </li>
            <li className="nav-container-desktop__item">
              <Link to="/favorites-list">Favorites</Link>
            </li>
            <li className="nav-container-desktop__item">
              {isAuthenticated ? (
                <>
                  <Profile />
                  <LogoutButton />
                </>
              ) : (
                <LoginButton />
              )}
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
