import React from "react";
import "../css/navbar.css";
import logo from "../images/uturk_logo.png";

const nav_links = [
  { name: "Ana Sayfa", link: "a" },
  { name: "Yardım", link: "b" },
  { name: "Hakkımızda", link: "c" },
];

function Navbar() {
  return (
    <div className="navbar">
      <div id="logo">
        <a href="#logo">
          <img className="logo-img" src={logo} alt="logo" />
        </a>
      </div>
      <div id="nav-link-group">
        {nav_links.map(({ name, link }) => (
          <a className="nav-link" href={`#${link}`}>
            {name}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
