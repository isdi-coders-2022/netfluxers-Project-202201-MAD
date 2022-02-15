import { useEffect } from 'react';
import { getDetail } from '../services/apiTmdb';
import './style-footer.scss';

export function FooterDesktop() {
  // useEffect(() => {
  // getDetail(550).then((data) => data);
  // }, []);

  return (
    <footer>
      <div className="footer-container-desktop">
        <div className="footer-container-desktop__info">
          <h4 className="footer-container-desktop__title">NETFLUX</h4>
          <div className="footer-container-desktop__container-info">
            <p className="footer-container-desktop__container-item">
              Calle del Flux 84
            </p>
            <p className="footer-container-desktop__container-item">
              Madrid 28054
            </p>
            <p className="footer-container-desktop__container-item">
              +6666336541
            </p>
          </div>
        </div>
        <div className="footer-container-desktop__socialmedia-container">
          <h4 className="footer-container-desktop__title">Follow Us</h4>
          <div className="footer-container-desktop__socialmedia">
            <img src="../assets/icon_facebook.png" alt="" />
            <img src="../assets/icon_instagram.png" alt="" />
            <img src="../assets/icon_youtube.png" alt="" />
            <img src="../assets/icon_twitter.png" alt="" />
          </div>
        </div>
        <div className="footer-container-desktop__trademark">
          <h4 className="footer-container-desktop__title">Trademark</h4>
          <div className="footer-container-desktop__container-info">
            <p className="footer-container-desktop__container-item">
              Jesus Rodriguez
            </p>
            <p className="footer-container-desktop__container-item">
              Felipe Luca de Tena
            </p>
            <p className="footer-container-desktop__container-item">
              Ivan Sierra
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
