import React from "react";
import Popup from "../Buttons/Popup";
import clsx from "clsx";
import ThemeSelector from "../Buttons/ThemeSelector";
import MainStyle, { images } from "../MainStyle";
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
  Tooltip,
  Typography,
  useScrollTrigger,
} from "@material-ui/core";
import { langs, changeLang, resetNotify } from "../../data/navSlices";
import { useDispatch, useSelector } from "react-redux";
import NotificationBox from "./NotificationBox";
import { useTranslation } from "react-i18next";

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
  document.body.style.cssText = `
  overflow: auto;
  `;
  const navDef = useSelector((state) => state.nav);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [useStyles, StyledBadge, stylesMain, nav_links] = MainStyle();

  const classes = useStyles();
  const [logo] = [images.logo];

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

  const list = React.useCallback(
    (anchor) => (
      <div
        style={{ width: "70vw" }}
        className={clsx(classes.list, {
          [classes.fullList]: anchor === "top" || anchor === "bottom",
        })}
        role="listbox"
        onKeyDown={toggleDrawer(anchor, false)}>
        <List role="list">
          <ListItem className={classes.hideLang}>
            <Popup
              btn={<img src={navDef.flag} alt="language flag" />}
              out={langs.map((lang, index) => (
                <Box key={lang.id}>
                  <Button
                    role="button"
                    aria-labelledby="language text"
                    className={classes.popup}
                    onClick={() => dispatch(changeLang(lang))}
                    color="primary"
                    style={stylesMain.textTheme}
                    endIcon={<img src={lang.flag} alt="language flag" />}>
                    {lang.label}
                  </Button>
                </Box>
              ))}
              isButton={true}
              start={<ion-icon name="caret-down" size="large"></ion-icon>}
              titleText={t("Tooltips.1.name")}
            />
          </ListItem>
          <ListItem
            role="button"
            arial-labelledby="close menu"
            onClick={toggleDrawer(anchor, false)}
            button
            className={classes.toolbar}
            style={{ width: "100%" }}>
            <ListItemIcon>
              <ion-icon
                name="chevron-forward"
                style={{
                  ...stylesMain.textTheme,
                  fontSize: "2rem",
                }}></ion-icon>
            </ListItemIcon>
          </ListItem>
          {nav_links.main_links.map(({ name, link, id }, index) => (
            <Link
              role="link"
              aria-label={name}
              className={classes.links}
              key={id}
              to={link}
              component={RouterLink}
              underline="none">
              <ListItem button role="button">
                <ListItemText
                  role="textbox"
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
            {nav_links.social_links
              .slice(1)
              .map(({ img_link, link, name, id }, index) => (
                <Tooltip
                  key={id}
                  title={<Typography variant="body2">{name}</Typography>}>
                  <Link
                    role="link"
                    aria-labelledby={name}
                    style={{ marginLeft: "13px" }}
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    underline="none">
                    <img className="social-img" src={img_link} alt={name} />
                  </Link>
                </Tooltip>
              ))}
          </Box>
        </List>
      </div>
    ),
    [state]
  );

  return (
    <>
      <HideOnScroll {...props}>
        <AppBar
          role="navigation"
          className={`${classes.appBar} ${classes.appBarTrigger}`}>
          <Box p="15px">
            <Toolbar>
              <Box
                width="100%"
                display="flex"
                alignItems="center"
                justifyContent="space-between">
                <Box role="link" display="flex" alignItems="center">
                  <RouterLink to="/">
                    <img
                      id="logo-img"
                      src={logo}
                      aria-label="uturk logo"
                      alt="uturk logo"
                    />
                  </RouterLink>
                  <Box ml="30px">
                    {nav_links.main_links.map(({ name, link, id }, index) => (
                      <Link
                        aria-label={name}
                        role="link"
                        key={id}
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
                      .map(({ img_link, link, name, id }, index) => (
                        <Tooltip
                          key={id}
                          title={
                            <Typography variant="body2">{name}</Typography>
                          }>
                          <Link
                            role="link"
                            aria-labelledby={name}
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
                        </Tooltip>
                      ))}
                  </Box>
                  <Box ml="8px">
                    <Popup
                      btn={
                        <StyledBadge
                          badgeContent={navDef.notify_num}
                          color="secondary">
                          <span
                            role="button"
                            aria-labelledby="bildirim"
                            onClick={() => dispatch(resetNotify())}>
                            <ion-icon
                              name="notifications"
                              style={{
                                ...stylesMain.textTheme,
                                fontSize: "1.8rem",
                              }}></ion-icon>
                          </span>
                        </StyledBadge>
                      }
                      out={<NotificationBox />}
                      isButton={false}
                      isRadio
                      titleText={t("Tooltips.0.name")}
                    />
                  </Box>
                  <Box className={classes.showLang} ml="8px">
                    <Popup
                      btn={<img src={navDef.flag} alt="language flag" />}
                      out={langs.map((lang, index) => (
                        <Box key={lang.id}>
                          <Button
                            role="button"
                            aria-labelledby="language text"
                            className={classes.popup}
                            onClick={() => dispatch(changeLang(lang))}
                            color="primary"
                            style={stylesMain.textTheme}
                            endIcon={
                              <img src={lang.flag} alt="language flag" />
                            }>
                            {lang.label}
                          </Button>
                        </Box>
                      ))}
                      isButton={true}
                      start={
                        <ion-icon name="caret-down" size="large"></ion-icon>
                      }
                      titleText={t("Tooltips.1.name")}
                    />
                  </Box>
                  <Box ml="8px" className={classes.mobileMenu}>
                    <Tooltip
                      title={
                        <Typography variant="body2">
                          {t("Tooltips.2.name")}
                        </Typography>
                      }>
                      <IconButton
                        role="button"
                        aria-labelledby="mobile menu"
                        onClick={toggleDrawer("right", true)}>
                        <ion-icon
                          style={stylesMain.textTheme}
                          name="menu"
                          size="large"></ion-icon>
                      </IconButton>
                    </Tooltip>
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
export default React.memo(Navbar);
