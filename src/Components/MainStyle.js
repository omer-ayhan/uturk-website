import { Badge, createTheme, makeStyles, withStyles } from "@material-ui/core";
import facebook from "../images/facebook.png";
import twitter from "../images/twitter.png";
import telegram from "../images/telegram.png";
import logo from "../images/uturk_logo.png";
import dark from "../images/dark.png";
import light from "../images/light.png";

const images = {
  facebook: facebook,
  twitter: twitter,
  telegram: twitter,
  logo: logo,
  dark: dark,
  light: light,
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

const useStyles = makeStyles((theme) => ({
  popup: {
    color: "#454545",
    fontSize: "16px",
    padding: "5px 10px 5px 15px",
    "&:hover": {
      backgroundColor: "#8fcd5d2a",
      color: "#90cd5d",
    },
  },
  footerParent: {
    position: "relative",
  },
  footerChild: {
    position: "absolute",
    bottom: "5px",
    left: "10px",
  },
}));

const themeMain = createTheme({
  overrides: {
    MuiSwitch: {
      colorSecondary: {
        "&$checked": {
          // Controls checked color for the thumb
          color: "#90CD5D",
        },
      },
      track: {
        // Controls default (unchecked) color for the track
        "$checked$checked + &": {
          // Controls checked color for the track
          opacity: 0.7,
          backgroundColor: "#90CD5D",
        },
      },
    },
  },
});

export { StyledBadge, nav_links, useStyles, images, themeMain };
