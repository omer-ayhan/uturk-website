import React from "react";
import Popup from "../Buttons/Popup";
import clsx from "clsx";
import ThemeSelector from "../Buttons/ThemeSelector";
import MainStyle, { nav_links, images } from "../MainStyle";
import { Link as RouterLink } from "react-router-dom";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Slide,
  SwipeableDrawer,
  Toolbar,
  Typography,
  useScrollTrigger,
} from "@material-ui/core";
import { langs, changeLang, resetNotify } from "../../data/navSlices";
import { useDispatch, useSelector } from "react-redux";
import NotificationBox from "./NotificationBox";

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    threshold: 0,
  });
  return (
    <Slide appear={true} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

function Navbar(props) {
  const navDef = useSelector((state) => state.nav);
  const dispatch = useDispatch();
  const [useStyles, StyledBadge, stylesMain] = MainStyle();

  const classes = useStyles();
  const [notify_bell, arrow_down, logo, hamburger, chevron] = [
    images.notify_bell,
    images.arrow_down,
    images.logo,
    images.hamburger,
    images.chevron_down,
  ];

  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      style={{ width: "70vw" }}
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}>
      <List>
        <ListItem className={classes.hideLang}>
          <Popup
            btn={<img src={navDef.flag} alt="" />}
            out={langs.map((lang, index) => (
              <Box key={index}>
                <Button
                  key={index}
                  className={classes.popup}
                  onClick={() => dispatch(changeLang(lang.flag))}
                  color="primary"
                  style={stylesMain.textTheme}
                  endIcon={<img key={index} src={lang.flag} alt="" />}>
                  {lang.label}
                </Button>
              </Box>
            ))}
            isButton={true}
            start={<img src={arrow_down} alt="" />}
          />
        </ListItem>
        <ListItem
          onClick={toggleDrawer(anchor, false)}
          button
          className={classes.toolbar}
          style={{ width: "100%" }}>
          <ListItemIcon>
            <img src={chevron} alt="" />
          </ListItemIcon>
        </ListItem>
        {nav_links.main_links.map(({ name, link }, index) => (
          <Link
            className={classes.links}
            key={index}
            to={link}
            component={RouterLink}
            underline="none">
            <ListItem button>
              <ListItemText
                primary={<Typography variant="h6">{name}</Typography>}
              />
            </ListItem>
          </Link>
        ))}
        <Box
          px="10px"
          display="flex"
          alignItems="center"
          justifyContent="flex-end">
          {nav_links.social_links.slice(1).map(({ img_link, link }, index) => (
            <Link
              key={index}
              style={{ marginLeft: "13px" }}
              href={link}
              target="_blank"
              rel="noreferrer"
              underline="none">
              <img className="social-img" src={img_link} alt="social link" />
            </Link>
          ))}
        </Box>
      </List>
    </div>
  );

  return (
    <>
      <HideOnScroll {...props}>
        <AppBar className={`${classes.appBar} ${classes.appBarTrigger}`}>
          <Box p="15px">
            <Toolbar>
              <Box
                width="100%"
                display="flex"
                alignItems="center"
                justifyContent="space-between">
                <Box display="flex" alignItems="center">
                  <RouterLink to="/">
                    <img id="logo-img" src={logo} alt="logo" />
                  </RouterLink>
                  <Box ml="30px">
                    {nav_links.main_links.map(({ name, link }, index) => (
                      <Link
                        key={index}
                        component={RouterLink}
                        color="primary"
                        className={classes.navLink}
                        to={link}
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
                    {nav_links.social_links
                      .slice(1)
                      .map(({ img_link, link }, index) => (
                        <Link
                          key={index}
                          className={classes.socialLink}
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
                        <StyledBadge
                          badgeContent={navDef.notify_num}
                          color="secondary">
                          <img
                            onClick={() => dispatch(resetNotify())}
                            className="notify-logo"
                            src={notify_bell}
                            alt=""
                          />
                        </StyledBadge>
                      }
                      out={<NotificationBox />}
                      isButton={false}
                      isRadio
                    />
                  </Box>
                  <Box className={classes.showLang} ml="8px">
                    <Popup
                      btn={<img src={navDef.flag} alt="" />}
                      out={langs.map((lang, index) => (
                        <Box key={index}>
                          <Button
                            key={index}
                            className={classes.popup}
                            onClick={() => dispatch(changeLang(lang.flag))}
                            color="primary"
                            style={stylesMain.textTheme}
                            endIcon={
                              <img key={index} src={lang.flag} alt="" />
                            }>
                            {lang.label}
                          </Button>
                        </Box>
                      ))}
                      isButton={true}
                      start={<img src={arrow_down} alt="" />}
                    />
                  </Box>
                  <Box ml="8px" className={classes.mobileMenu}>
                    <IconButton onClick={toggleDrawer("right", true)}>
                      <img src={hamburger} alt="" />
                    </IconButton>
                  </Box>
                </Box>
              </Box>
            </Toolbar>
            <ThemeSelector />
          </Box>
        </AppBar>
      </HideOnScroll>
      <SwipeableDrawer
        className={classes.mobileMenu}
        anchor={"right"}
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
        onOpen={toggleDrawer("right", true)}>
        {list("right")}
      </SwipeableDrawer>
    </>
  );
}
export default Navbar;
