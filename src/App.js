import './App.css';
import { FooterDesktop } from './components/footer/footer-desktop';
import { HeaderHome } from './components/movies-home/header-home';
import { NavDesktop } from './components/nav/nav-desktop';


function App() {
  return (
    <div className="App">
      <NavDesktop />
      <HeaderHome />
      <FooterDesktop />
    </div>
  );
}

export default App;
