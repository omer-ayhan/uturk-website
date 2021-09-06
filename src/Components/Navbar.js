import React from "react";
import Popup from "./Popup";
import ThemeSelector from "./ThemeSelector";
import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";
import { Button, makeStyles } from "@material-ui/core";
import "../css/navbar.css";
import logo from "../images/uturk_logo.png";
import facebook from "../images/facebook.png";
import twitter from "../images/twitter.png";
import telegram from "../images/telegram.png";
import notify_bell from "../images/notify_bell.png";
import TR_flag from "../images/TR.png";
import US_flag from "../images/US.png";
import arrow_down from "../images/arrow-down.png";

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

const useStyles = makeStyles((theme) => ({
  myClassName: {
    color: "#454545",
    fontSize: "16px",
    padding: "5px 10px 5px 15px",
    "&:hover": {
      backgroundColor: "#8fcd5d2a",
      color: "#90cd5d",
    },
  },
}));

function Navbar() {
  const classes = useStyles();
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
      <Popup
        btn={
          <StyledBadge badgeContent={1} color="secondary">
            <img className="notify-logo" src={notify_bell} alt="" />
          </StyledBadge>
        }
        out={"something"}
        disableHover={false}
        isButton={false}
      />
      <Popup
        btn={<img src={TR_flag} alt="" />}
        out={
          <Button
            className={classes.myClassName}
            color="primary"
            endIcon={<img src={US_flag} alt="" />}>
            US
          </Button>
        }
        disableHover={true}
        isButton={true}
        start={<img src={arrow_down} alt="" />}
      />
      <ThemeSelector />
    </div>
  );
}

export default Navbar;
