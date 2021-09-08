import React from "react";
import Popup from "./Popup";
import ThemeSelector from "./ThemeSelector";
import {
  StyledBadge,
  nav_links,
  useStyles,
  images,
  stylesMain,
} from "./MainStyle";
import {
  AppBar,
  Box,
  Button,
  Link,
  Toolbar,
  Typography,
} from "@material-ui/core";
import "../css/navbar.css";

function Navbar() {
  const classes = useStyles();
  const [notify_bell, arrow_down, US_flag, TR_flag, logo] = [
    images.notify_bell,
    images.arrow_down,
    images.US_flag,
    images.TR_flag,
    images.logo,
  ];
  return (
    <AppBar style={stylesMain.bgLight} position="static">
      <Box p="15px">
        <Toolbar>
          <Box
            width="100%"
            display="flex"
            alignItems="center"
            justifyContent="space-between">
            <Box display="flex" alignItems="center">
              <Link href="#logo">
                <img id="logo-img" src={logo} alt="logo" />
              </Link>
              <Box ml="30px">
                {nav_links.main_links.map(({ name, link }) => (
                  <Link
                    className={classes.navLink}
                    href={`#${link}`}
                    underline="none">
                    <Typography variant="h6" component="span">
                      {name}
                    </Typography>
                  </Link>
                ))}
              </Box>
            </Box>
            <Box display="flex" alignItems="center">
              <Box>
                {nav_links.social_links.map(({ img_link, link }) => (
                  <Link
                    style={{ marginLeft: "13px" }}
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    underline="none">
                    <img
                      className="social-img"
                      src={img_link}
                      alt="social link"
                    />
                  </Link>
                ))}
              </Box>
              <Box ml="8px">
                <Popup
                  btn={
                    <StyledBadge badgeContent={1} color="secondary">
                      <img className="notify-logo" src={notify_bell} alt="" />
                    </StyledBadge>
                  }
                  out={"something"}
                  isButton={false}
                />
              </Box>
              <Box ml="8px">
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
          </Box>
        </Toolbar>
        <ThemeSelector />
      </Box>
    </AppBar>
  );
}

export default Navbar;
