import "./Footer.css";
import Socmed from "../../Components/Socmed/Socmed";
import logo from "../../assets/logo.svg";
import facebook from "../../assets/icon-facebook.svg";
import instagram from "../../assets/icon-instagram.svg";
import pinterest from "../../assets/icon-pinterest.svg";
import twitter from "../../assets/icon-twitter.svg";

function Footer() {
  return (
    <footer className="footer" id="Contact">
      <img className="footer__logo" src={logo} alt="logo" />
      <ul className="footer__menu">
        <li>
          <a href="#About">About</a>
        </li>
        <li>
          <a href="#Services">Services</a>
        </li>
        <li>
          <a href="#Projects">Projects</a>
        </li>
      </ul>
      <ul className="footer__socmed">
        <Socmed link="facebook.com" icon={facebook} />
        <Socmed link="instagram.com" icon={instagram} />
        <Socmed link="twitter.com" icon={twitter} />
        <Socmed link="pinterest.com" icon={pinterest} />
      </ul>
      <div className="attribution">
        Challenge by
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by
        <a
          href="https://www.frontendmentor.io/profile/Diphopho"
          rel="noreferrer"
        >
          Diphopho
        </a>
        .
      </div>
    </footer>
  );
}

export default Footer;
