import "../styles/footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="app-footer">
      <div className="app-footer-column">
        <p className="copyright">© Copyright Dronius 2021 ©</p>
        <a>Legal</a>
        <a>CGU</a>
        <a>RGPD</a>
        {/* <Link to="/Legal"></Link>
        <Link to="/CGU"></Link>
        <Link to="/RGPD"></Link> */}
      </div>
      <div className="app-footer-column">
        <p>Retrouvez nous sur nos Réseaux Sociaux :</p>
        <p id="socials">
          <a>
            <i class="fab fa-instagram px-2"> </i>
          </a>
          <a>
            <i class="fab fa-snapchat px-2"> </i>
          </a>
          <a>
            <i class="fab fa-twitter-square px-2"> </i>
          </a>
          <a>
            <i class="fab fa-facebook-square px-2"> </i>
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
