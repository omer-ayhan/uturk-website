import React from "react";
import Popup from "./Popup";
import ThemeSelector from "./ThemeSelector";
import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Box,
  Button,
  Link,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
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
    { img_link: twitter, link: "https://twitter.com/uturknet" },
    { img_link: telegram, link: "f" },
  ],
};
const StyledBadge = withStyles((theme) => ({
  badge: {
    right: 0,
    top: 5,
    backgroundColor: "#EC1C24",
    border: `2px solid #fff`,
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
    <AppBar style={{ background: "#fff" }} position="static">
      <Box p="15px">
        <Toolbar>
          <Box
            width="100%"
            display="flex"
            alignItems="center"
            justifyContent="space-between">
            <Box display="flex" spacing={3} alignItems="center">
              <a href="#logo">
                <img id="logo-img" src={logo} alt="logo" />
              </a>
              <Box ml="30px">
                {nav_links.main_links.map(({ name, link }) => (
                  <Link
                    style={{ padding: "15px" }}
                    className="nav-link"
                    href={`#${link}`}>
                    <Typography variant="h6" component="span">
                      {name}
                    </Typography>
                  </Link>
                ))}
              </Box>
            </Box>
            <Box display="flex" alignItems="center">
              {nav_links.social_links.map(({ img_link, link }) => (
                <Link
                  style={{ marginLeft: "10px" }}
                  href={link}
                  target="_blank"
                  rel="noreferrer">
                  <img
                    className="social-img"
                    src={img_link}
                    alt="social link"
                  />
                </Link>
              ))}
              <Popup
                btn={
                  <StyledBadge badgeContent={1} color="secondary">
                    <img className="notify-logo" src={notify_bell} alt="" />
                  </StyledBadge>
                }
                out={"something"}
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
                isButton={true}
                start={<img src={arrow_down} alt="" />}
              />
            </Box>
          </Box>
        </Toolbar>
        <ThemeSelector />
      </Box>
    </AppBar>
  );
}

export default Navbar;
