import React from "react";
import "./Menu.css";

class Menu extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     // show: this.props.show,
  //     toggleClass: this.props.show ? "show" : "hide",
  //   };
  //   this.handleShow = this.handleShow.bind(this);
  // }

  // state = {
  //   toggleClass: this.props.show ? "show" : "hide",
  // };

  handleShow() {
    // console.log(this.state.show);
    return !this.props.show;
  }

  render() {
    return (
      <menu className={`menu ${this.props.show ? "show" : "hide"}`}>
        <li className="menu__list">
          <a className="menu__link" href="#About" onClick={this.handleShow}>
            About
          </a>
        </li>
        <li className="menu__list">
          <a className="menu__link" href="#Services" onClick={this.handleShow}>
            Services
          </a>
        </li>
        <li className="menu__list">
          <a className="menu__link" href="#Projects" onClick={this.handleShow}>
            Projects
          </a>
        </li>
        <li className="menu__list">
          <a
            className="menu__link contact"
            href="#Contact"
            onClick={this.handleShow}
          >
            Contact
          </a>
        </li>
      </menu>
    );
  }
}
// function Menu(props) {
//   function handleClick() {
//     props.show = "hide";
//   }

//   return (
//     // <menu className={`menu ${props.show}`}>
//     //   <li className="menu__list">
//     //     <a className="menu__link" href="#About" onClick={handleClick}>
//     //       About
//     //     </a>
//     //   </li>
//     //   <li className="menu__list">
//     //     <a className="menu__link" href="#Services">
//     //       Services
//     //     </a>
//     //   </li>
//     //   <li className="menu__list">
//     //     <a className="menu__link" href="#Projects">
//     //       Projects
//     //     </a>
//     //   </li>
//     //   <li className="menu__list">
//     //     <a className="menu__link contact" href="#Contact">
//     //       Contact
//     //     </a>
//     //   </li>
//     // </menu>
//   );
// }

export default Menu;
