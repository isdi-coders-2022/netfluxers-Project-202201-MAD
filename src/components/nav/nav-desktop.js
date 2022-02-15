import './style-nav-desktop.scss';


export function NavDesktop() {
  return (
    <div className="container">
    <div className="nav-container">
      <h1 className="header-title">NETFLUX</h1>
      <ul className="nav-container-desktop">
        <li className="nav-container-desktop__item">
          <a href="">Home</a>
        </li>
        <li className="nav-container-desktop__item">
          <a href="">Favorites</a>
        </li>
        <li className="nav-container-desktop__item">
          <a href="">Account</a>
        </li>
      </ul>
    </div>
    </div>
  );
}
