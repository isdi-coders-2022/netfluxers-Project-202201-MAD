import './App.css';
import { FooterDesktop } from './components/footer/footer-desktop';
import { HeaderHome } from './components/movies-home/header-home';

function App() {
  return (
    <div className="App">
      <HeaderHome />
      <FooterDesktop />
    </div>
  );
}

export default App;
