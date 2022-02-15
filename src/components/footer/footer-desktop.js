import './style-footer.scss';
import {
  AiFillTwitterSquare,
  AiFillFacebook,
  AiFillInstagram,
  AiFillYoutube,
} from 'react-icons/ai';

export function FooterDesktop() {
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
            <AiFillFacebook color="white" className="footer-icon" />
            <AiFillInstagram color="white" className="footer-icon" />
            <AiFillYoutube color="white" className="footer-icon" />
            <AiFillTwitterSquare
              color="white"
              className="additional-class-name"
            />
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
