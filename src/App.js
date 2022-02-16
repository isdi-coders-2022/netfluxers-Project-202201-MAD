import { Routes, Route } from 'react-router-dom';
import './App.css';
import { FooterDesktop } from './components/footer/footer-desktop';
import { NavDesktop } from './components/nav/nav-desktop';
import { ContainerHome } from './components/container-home/container-home';
import { ContainerFav } from './components/container-fav/container-fav';
import { ContainerDetails } from './components/container-details/container-details';
import { DetailsCast } from './components/details-web/details-cast';

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
        <Route path="/details" element={<ContainerDetails />} />
        <Route path="*" element={<ContainerHome />} />
      </Routes>
      <FooterDesktop />
    </div>
  );
}

export default App;
