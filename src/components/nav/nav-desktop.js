import './style-nav-desktop.scss';
import { Link } from 'react-router-dom';

export function NavDesktop() {
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
              <Link to="/*">Account</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
