import { Badge, makeStyles, withStyles } from "@material-ui/core";
import facebook from "../images/facebook.png";
import twitter from "../images/twitter.png";
import telegram from "../images/telegram.png";
import logo from "../images/uturk_logo.png";
import hamburger from "../images/hamburger.png";
import TR_flag from "../images/TR.png";
import US_flag from "../images/US.png";
import live from "../images/live.svg";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { v4 as uuidv4 } from "uuid";

function MainStyle() {
  const checked = useSelector((state) => state.nav.theme);
  const { t } = useTranslation();
  const useStyles = makeStyles(
    (theme) => ({
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
      showAd: {
        [theme.breakpoints.up(1255)]: {
          display: "none",
        },
      },
      footerLinkResp: {
        display: "none",
        [theme.breakpoints.up("sm")]: {
          display: "block",
        },
      },
      showBreak: {
        [theme.breakpoints.up("xs")]: {
          display: "none",
        },
        [theme.breakpoints.up("xl")]: {
          display: "block",
        },
      },
      respMainWrap: {
        [theme.breakpoints.up("xs")]: {
          padding: "0 7px 0 7px",
        },
        [theme.breakpoints.up("sm")]: {
          padding: "0 60px 0 60px",
        },
        [theme.breakpoints.up("md")]: {
          padding: "0 50px 0 50px",
        },
      },
      papersVideo: {
        [theme.breakpoints.up("xs")]: {
          height: "260px",
        },
        [theme.breakpoints.up("sm")]: {
          height: "450px",
        },
        [theme.breakpoints.up("md")]: {
          height: "470px",
        },
        [theme.breakpoints.up("lg")]: {
          height: "570px",
        },
        [theme.breakpoints.up("xl")]: {
          height: "600px",
        },
      },
      papersChannels: {
        [theme.breakpoints.up("xs")]: {
          height: "500px",
        },
        [theme.breakpoints.up("md")]: {
          height: "490px",
        },
        [theme.breakpoints.up("lg")]: {
          height: "590px",
        },
        [theme.breakpoints.up("xl")]: {
          height: "620px",
        },
      },
      showLang: {
        display: "none",
        [theme.breakpoints.up(370)]: {
          display: "block",
        },
      },
      hideLang: {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        [theme.breakpoints.up(370)]: {
          display: "none",
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
        display: "none",
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
        [theme.breakpoints.up(1020)]: {
          display: "inline-block",
        },
      },
      socialLink: {
        display: "none",
        [theme.breakpoints.up(1020)]: {
          display: "inline-block",
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
      appBarTrigger: {
        position: "static",
        [theme.breakpoints.up(1020)]: {
          position: "fixed",
        },
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
      mobileMenu: {
        display: "block",
        [theme.breakpoints.up(1020)]: {
          display: "none",
        },
      },
      tabs: {
        flexGrow: 2,
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
    }),
    { index: 1 }
  );
  const StyledBadge = withStyles(
    (theme) => ({
      badge: {
        right: 0,
        top: 5,
        backgroundColor: "#EC1C24",
        border: `3px solid ${checked ? "#1a1a1a" : "#fff"}`,
        padding: "0 3px",
        textAlign: "center",
      },
    }),
    { index: 1 }
  )(Badge);
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

  const nav_links = {
    main_links: [
      { name: t(`main_links.0.name`), link: "/", id: uuidv4() },
      { name: t("main_links.1.name"), link: "/yardım", id: uuidv4() },
      { name: t("main_links.2.name"), link: "/hakkımızda", id: uuidv4() },
      { name: t("main_links.3.name"), link: "/iletisim", id: uuidv4() },
    ],
    social_links: [
      {
        img_link: "mail",
        link: "mailto:uturknet@gmail.com",
        name: "uturknet@gmail.com",
        id: uuidv4(),
      },
      { img_link: facebook, link: "d", name: "Facebook", id: uuidv4() },
      {
        img_link: twitter,
        link: "https://twitter.com/uturknet",
        name: "Twitter",
        id: uuidv4(),
      },
      {
        img_link: telegram,
        link: "https://t.me/uturknet",
        name: "Telegram",
        id: uuidv4(),
      },
    ],
  };

  return [useStyles, StyledBadge, stylesMain, nav_links];
}
export default MainStyle;

const images = {
  facebook: facebook,
  twitter: twitter,
  telegram: telegram,
  logo: logo,
  hamburger: hamburger,
  TR_flag: TR_flag,
  US_flag: US_flag,
  live: live,
};

export { MainStyle, images };
