import { Routes, Route } from 'react-router-dom';
import './App.css';
import { FooterDesktop } from './components/footer/footer-desktop';
import { NavDesktop } from './components/nav/nav-desktop';
import { ContainerHome } from './components/container-home/container-home';
import { ContainerFav } from './components/container-fav/container-fav';
import { ContainerDetails } from './components/container-details/container-details';
import { DetailsTrailer } from './components/details-web/details-trailer';

export function App() {
  return (
    <div className="App">
      <NavDesktop />
      <Routes>
        <Route path="/" element={<ContainerHome />} />
        <Route path="/favorites-list" element={<ContainerFav />} />
        <Route path="/details/:id" element={<ContainerDetails />} />
        <Route path="/trailer/:id" element={<DetailsTrailer />} />
        <Route path="*" element={<ContainerHome />} />
      </Routes>
      <FooterDesktop />
    </div>
  );
}
