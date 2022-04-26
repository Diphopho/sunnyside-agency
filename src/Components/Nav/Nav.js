import logo from "../../assets/logo.svg";
import hamburger from "../../assets/icon-hamburger.svg";
// import Menu from "../Menu/Menu";
import "./Nav.css";
import "../Menu/Menu.css";
import { useState } from "react";

function Nav() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const toggle = () => setToggleMenu(!toggleMenu);
  return (
    <nav className="nav">
      <img src={logo} alt="logo" />
      <menu className={toggleMenu ? "menu show" : "menu"}>
        <li className="menu__list">
          <a className="menu__link" href="#About" onClick={toggle}>
            About
          </a>
        </li>
        <li className="menu__list">
          <a className="menu__link" href="#Services" onClick={toggle}>
            Services
          </a>
        </li>
        <li className="menu__list">
          <a className="menu__link" href="#Projects" onClick={toggle}>
            Projects
          </a>
        </li>
        <li className="menu__list">
          <a className="menu__link contact" href="#Contact" onClick={toggle}>
            Contact
          </a>
        </li>
      </menu>
      <img className="hamburger" src={hamburger} alt="" onClick={toggle} />
    </nav>
  );
}

export default Nav;
