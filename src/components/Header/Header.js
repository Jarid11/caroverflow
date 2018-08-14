import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      categories: ["Home", "Tags", "Users", "Jobs"],
      isChecked: false
    };
  }

  toggleMenu = () => {
    this.setState({
      isChecked: !this.state.isChecked
    });
  };

  render() {
    let { categories, isChecked } = this.state;
    console.log(isChecked);
    return (
      <div id="menuToggle">
        <input
          type="checkbox"
          onClick={this.toggleMenu}
          checked={isChecked && true}
        />

        <span />
        <span />
        <span />

        <ul id="menu" onChange={this.toggleMenu}>
          {categories.map((e, i) => {
            return (
              <a key={i} href="#" onClick={this.toggleMenu} className="links">
                {e}
              </a>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Header;

// <header>
//   <div className="hamburger-container" onClick={this.handleHamburgerMenu}>
//     <div className="bar bar1" />
//     <div className="bar bar2" />
//     <div className="bar bar3" />
//   </div>
// </header>
