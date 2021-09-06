import React, { useState } from "react";
import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Popover from "@material-ui/core/Popover";
import "../css/navbar.css";
import logo from "../images/uturk_logo.png";
import facebook from "../images/facebook.png";
import twitter from "../images/twitter.png";
import telegram from "../images/telegram.png";
import notify_bell from "../images/notify_bell.png";

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
const StyledBadge = withStyles((theme) => ({
  badge: {
    right: 0,
    top: 5,
    backgroundColor: "#EC1C24",
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}))(Badge);

function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

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
      <IconButton aria-label="cart" onClick={handleClick}>
        <StyledBadge badgeContent={1} color="secondary">
          <img className="notify-logo" src={notify_bell} alt="" />
        </StyledBadge>
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}>
        Something
      </Popover>
    </div>
  );
}

export default Navbar;
