import { Badge, makeStyles, withStyles } from "@material-ui/core";
import facebook from "../images/facebook.png";
import twitter from "../images/twitter.png";
import telegram from "../images/telegram.png";
import logo from "../images/uturk_logo.png";
import dark from "../images/dark.png";
import light from "../images/light.png";
import FB from "../images/FB.png";
import GS from "../images/GS.png";
import locked from "../images/locked.png";
import hamburger from "../images/hamburger.png";
import chevron_down from "../images/chevron-down.png";
import filter from "../images/filter.png";
import mail from "../images/mail.png";
import share from "../images/share.png";
import notify_bell from "../images/notify_bell.png";
import TR_flag from "../images/TR.png";
import US_flag from "../images/US.png";
import arrow_down from "../images/arrow-down.png";
import live from "../images/live.svg";
import viewer from "../images/viewer.png";
import Bein from "../images/Bein.png";
import Smart from "../images/Smart.png";
import { useSelector } from "react-redux";

function MainStyle() {
  const checked = useSelector((state) => state.nav.theme);
  const useStyles = makeStyles((theme) => ({
    notifyImgBox: {
      padding: "4px",
      marginBottom: "10px",
      width: "50px",
      height: "50px",
      background: "#fff",
      borderRadius: "50%",
      boxShadow: "0 0 0 5px rgba(131, 131, 131, 0.3)",
    },
    notifyText: {
      textAlign: "center",
      fontSize: "1.1rem",
    },
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
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      background: checked ? "#4B4B4B" : "#e8e8e8",
    },
    footerChild: {
      position: "absolute",
      bottom: "5px",
      left: "10px",
    },
    navLink: {
      textDecoration: "none",
      textAlign: "center",
      padding: "10px",
      marginLeft: "5px",
      borderRadius: "8px",
      transition: "background-color 0.3s",
      "&:hover": {
        background: "#90cd5d",
        color: "#fff",
      },
    },
    textTheme: {
      color: checked ? "#fff" : "#333333",
    },
    appBar: checked
      ? {
          boxShadow: "10px 3px 20px 7px rgba(180, 180, 180, 0.11)",
          background: "#1a1a1a",
        }
      : {
          boxShadow: "10px 3px 20px 7px rgba(0, 0, 0, 0.11)",
          background: "#fff",
        },
    papers: checked
      ? {
          boxShadow: "10px 3px 20px 7px rgba(180, 180, 180, 0.11)",
          background: "#1a1a1a",
        }
      : {
          boxShadow: "10px 3px 20px 7px rgba(0, 0, 0, 0.11)",
          background: "#fff",
        },
    topBtn: {
      position: "fixed",
      color: "#90CD5D",
      bottom: "10px",
      right: "10px",
    },
    tabs: {
      flexGrow: 1,
      background: checked ? "#1a1a1a" : "#fff",
      boxShadow: "none",
      borderTop: `3px solid ${checked ? "#6F6F6F" : "#e5e5e5"}`,
    },
    twitterBox: {
      background: checked ? "#1a1a1a" : "#fff",
      borderBottom: `3px solid ${checked ? "#6F6F6F" : "#e5e5e5"}`,
    },
    darkMode: {
      position: "absolute",
      top: 0,
      right: "40px",
    },
  }));
  const StyledBadge = withStyles((theme) => ({
    badge: {
      right: 0,
      top: 5,
      backgroundColor: "#EC1C24",
      border: `3px solid ${checked ? "#1a1a1a" : "#fff"}`,
      padding: "0 3px",
      textAlign: "center",
    },
  }))(Badge);
  const stylesMain = {
    channelItem: {
      disabledScreen: {
        background: "transparent",
        justifyContent: "flex-start",
      },
    },
    linkWhite: {
      textDecoration: "none",
      textAlign: "center",
      color: "#fff",
    },
    textTheme: {
      color: checked ? "#fff" : "#333333",
    },
    linkDark: {
      textDecoration: "none",
      textAlign: "center",
      color: "#454545",
    },
    linkMain: {
      textDecoration: "none",
      textAlign: "center",
    },
    borderGray: {
      borderBottom: "3px solid #e5e5e5",
    },
    lockedBtn: { position: "absolute", top: "10px", left: "10px" },
  };

  return [useStyles, StyledBadge, stylesMain];
}
export default MainStyle;

const images = {
  facebook: facebook,
  twitter: twitter,
  telegram: telegram,
  logo: logo,
  dark: dark,
  light: light,
  FB: FB,
  GS: GS,
  locked: locked,
  hamburger: hamburger,
  chevron_down: chevron_down,
  filter: filter,
  mail: mail,
  share: share,
  notify_bell: notify_bell,
  TR_flag: TR_flag,
  US_flag: US_flag,
  arrow_down: arrow_down,
  live: live,
  viewer: viewer,
  Bein: Bein,
  Smart: Smart,
};

const nav_links = {
  main_links: [
    { name: "Ana Sayfa", link: "/" },
    { name: "Yardım", link: "/yardım" },
    { name: "Hakkımızda", link: "/hakkımızda" },
    { name: "İletişim", link: "/iletisim" },
  ],
  social_links: [
    {
      img_link: mail,
      link: "mailto:uturknet@gmail.com",
      name: "uturknet@gmail.com",
    },
    { img_link: facebook, link: "d", name: "Facebook" },
    {
      img_link: twitter,
      link: "https://twitter.com/uturknet",
      name: "Twitter",
    },
    { img_link: telegram, link: "f", name: "Telegram" },
  ],
};

export { nav_links, MainStyle, images };
