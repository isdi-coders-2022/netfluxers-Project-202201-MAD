import './App.css';
import { FooterDesktop } from './components/footer-desktop';
import { NavMobile } from './components/nav-mobile';
import { NavDesktop } from './components/nav-desktop';
import { HeaderHome } from './components/header-home';

function App() {
  return (
    <div className="App">
      <HeaderHome />
      <FooterDesktop />
    </div>
  );
}

export default App;
