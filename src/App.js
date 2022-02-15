import { Routes, Route } from 'react-router-dom';
import './App.css';
import { DetailsCast } from './components/details-web/details-cast';
import { DetailsFeature } from './components/details-web/details-feature';
import { FooterDesktop } from './components/footer/footer-desktop';
import { NavDesktop } from './components/nav/nav-desktop';
import { ContainerHome } from './components/container-home/container-home';
import { ContainerFav } from './components/container-fav/container-fav';

function App() {
  return (
    <div className="App">
      <NavDesktop />
      <Routes>
        <Route path="/" element={<ContainerHome />} />
        {/* <Route path="/home" element={<ToDo />} />
        <Route path="/gents" element={<GentlemenPage />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/about" element={<About />} /> */}
        <Route path="/favorites-list" element={<ContainerFav />} />
        <Route path="*" element={<ContainerHome />} />
      </Routes>
      <FooterDesktop />
    </div>
  );
}

export default App;
