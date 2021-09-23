import { Box, Button, Card, Typography } from "@material-ui/core";
import React from "react";
import { useAuth } from "./AuthContext";
import { useHistory } from "react-router-dom";
import MainStyle, { images } from "./MainStyle";
import ReCAPTCHA from "react-google-recaptcha";
import Popup from "./Buttons/Popup";
import { changeLang, langs, logUser } from "../data/navSlices";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { auth } from "../firebaseConf";

function SignIn() {
  document.body.style.cssText = `
        overflow: hidden;`;
  const { login } = useAuth();
  const { signIn } = login;
  const history = useHistory();
  const dispatch = useDispatch();
  const navDef = useSelector((state) => state.nav);
  const { t } = useTranslation();
  const [recaptcha, setRecaptcha] = React.useState(null);
  const [err, setErr] = React.useState("");
  const [useStyles] = MainStyle();
  const classes = useStyles();
  const signUser = async (e) => {
    e.preventDefault();
    try {
      if (recaptcha) {
        await signIn();
        dispatch(logUser({ user: auth.currentUser.uid, isMatched: true }));
        history.push("/");
      } else {
        setErr("* Please confirm the checkbox");
      }
    } catch (err) {
      setErr(err);
    }
  };
  return (
    <form onSubmit={signUser}>
      <Box
        display="flex"
        p="20px"
        width="100vw"
        height="100%"
        flexDirection="column"
        justifyContent="center"
        alignItems="center">
        <Box style={{ marginLeft: "260px" }}>
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
                  style={{ color: "#fff" }}
                  endIcon={<img src={lang.flag} alt="language flag" />}>
                  {lang.label}
                </Button>
              </Box>
            ))}
            isButton={true}
            start={
              <ion-icon
                name="caret-down"
                size="large"
                style={{ color: "#333" }}></ion-icon>
            }
            titleText={t("Tooltips.1.name")}
          />
        </Box>

        <Card
          style={{
            background: "#fff",
            width: "300px",
            height: "320px",
            padding: "20px",
            boxShadow: "0px 3px 17px 5px rgba(0, 0, 0, 0.09)",
          }}>
          <Box
            height="100%"
            display="flex"
            flexDirection="column"
            justifyContent="space-around"
            alignItems="center"
            style={{ gap: "15px" }}>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center">
              <img
                style={{ width: "150px", height: "auto" }}
                src={images.logo}
                id="logo-img"
                alt="uturk logo"
              />
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              style={{ gap: "15px" }}>
              <Typography variant="h6" style={{ color: "#333" }}>
                Please Confirm For Your Safety
              </Typography>
              <ReCAPTCHA
                style={{ marginTop: "10px" }}
                sitekey="6LfyCYUcAAAAAPMw_t86VwXzXe7M9222X9KHL5sE"
                onChange={(val) => setRecaptcha(val)}
              />
              <Button
                style={{ width: "100%", height: "50px" }}
                variant="contained"
                color="primary"
                type="submit">
                <Typography className={classes.textTheme} variant="subtitle2">
                  Enter Site
                </Typography>
              </Button>
              <Typography
                gutterBottom
                variant="body2"
                style={{ color: "#EB3915" }}>
                {err}
              </Typography>
            </Box>
          </Box>
        </Card>
      </Box>
    </form>
  );
}

export default SignIn;
