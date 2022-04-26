// import imageHeader from '/public/picture/mobile/image-header.jpg';

import "./Header.css";
import Nav from "../../Components/Nav/Nav";
import arrow from "../../assets/icon-arrow-down.svg";

function Header() {
  return (
    <header className="header">
      <Nav />
      <h1>We are Creatives</h1>
      <img className="arrow" src={arrow} alt="" />
    </header>
  );
}

export default Header;
