import React from "react";
import "../css/navbar.css";
import logo from "../images/uturk.png";

function Navbar() {
  return (
    <div className="navbar">
      <div id="logo">
        <a href="#logo">{""}</a>
        <img className="logo-img" src={logo} alt="logo" />
        <h1>Utürk</h1>
      </div>
    </div>
  );
}

export default Navbar;
