import logo from './logo.svg';
import './App.css';
import { FooterDesktop } from './component/footer-desktop';
import { NavMobile } from './component/nav-mobile';

function App() {
  return (
    <div className="App">
      <header className="App-header" />
      <NavMobile />
      <FooterDesktop />
    </div>
  );
}

export default App;
