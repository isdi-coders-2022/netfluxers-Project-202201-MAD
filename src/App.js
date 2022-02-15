import './App.css';
import { DetailsCast } from './components/details-web/details-cast';
import { DetailsFeature } from './components/details-web/details-feature';
import { FooterDesktop } from './components/footer/footer-desktop';
import { HeaderHome } from './components/movies-home/header-home';

function App() {
  return (
    <div className="App">
      <DetailsFeature />
      <DetailsCast />
      <FooterDesktop />
    </div>
  );
}

export default App;
