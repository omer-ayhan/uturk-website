import React from "react";
import Popup from "./Popup";
import ThemeSelector from "./ThemeSelector";
import { StyledBadge, nav_links, useStyles } from "./MainStyle";
import {
  AppBar,
  Box,
  Button,
  Link,
  Toolbar,
  Typography,
} from "@material-ui/core";
import "../css/navbar.css";
import logo from "../images/uturk_logo.png";
import notify_bell from "../images/notify_bell.png";
import TR_flag from "../images/TR.png";
import US_flag from "../images/US.png";
import arrow_down from "../images/arrow-down.png";

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
              <Link href="#logo">
                <img id="logo-img" src={logo} alt="logo" />
              </Link>
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
                    className={classes.popup}
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
