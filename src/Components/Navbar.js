import React from "react";
import "../css/navbar.css";
import logo from "../images/uturk_logo.png";
import facebook from "../images/facebook.png";
import twitter from "../images/twitter.png";
import telegram from "../images/telegram.png";

const nav_links = {
  main_links: [
    { name: "Ana Sayfa", link: "a" },
    { name: "Yardım", link: "b" },
    { name: "Hakkımızda", link: "c" },
  ],
  social_links: [
    { img_link: facebook, link: "d" },
    { img_link: twitter, link: "e" },
    { img_link: telegram, link: "f" },
  ],
};

function Navbar() {
  return (
    <div className="navbar">
      <div id="logo">
        <a href="#logo">
          <img className="logo-img" src={logo} alt="logo" />
        </a>
      </div>
      <div id="nav-link-group">
        {nav_links.main_links.map(({ name, link }) => (
          <a className="nav-link" href={`#${link}`}>
            {name}
          </a>
        ))}
      </div>
      <div id="social-group">
        {nav_links.social_links.map(({ img_link, link }) => (
          <a className="social-link" href={`#${link}`}>
            <img className="social-img" src={img_link} alt="social link" />
          </a>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
