import './style-nav-mobile.scss';

export function NavMobile() {
  return (
    <ul className="nav-container-mobile">
      <li className="nav-container-mobile__item">
        <a href="">
          <img src="../assets/icon_home-blue.png" alt="icon-home" />
        </a>
      </li>
      <li className="nav-container-mobile__item">
        <a href="">
          <img src="../assets/icon_love-blue.png" alt="icon-favorites" />
        </a>
      </li>
      <li className="nav-container-mobile__item">
        <a href="">
          <img src="../assets/icon_account-blue.png" alt="icon-account" />
        </a>
      </li>
    </ul>
  );
}
