import "../css/App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AdvertiseBox from "./Extra/AdvertiseBox";
import ChannelList from "./Channel_List/ChannelList";
import Navbar from "./Nav/Navbar";
import VideoBox from "./VideoBox";
import Description from "./Description";
import TwitterBox from "./TwitterBox";
import { Box, createTheme, Grid, ThemeProvider } from "@material-ui/core";
import Footer from "./Footer";
import BackToTop from "./Buttons/BackToTop";
import { useDispatch, useSelector } from "react-redux";
import YardımPage from "./Extra/YardımPage";
import HakkımızdaPage from "./Extra/HakkımızdaPage";
import IletisimPage from "./Extra/IletisimPage";
import React from "react";
import { changeLink } from "../data/channelSlices";
import { updateNotifyData } from "../data/notifySlices";
import { db } from "../firebaseConf";
import { updateNotify } from "../data/navSlices";
import MainStyle from "./MainStyle";

function App() {
  const checked = useSelector((state) => state.nav.theme);
  const dispatch = useDispatch();
  const [useStyles] = MainStyle();
  const classes = useStyles();

  React.useEffect(() => {
    const unsubscribe = db
      .collection("permanent")
      .orderBy("timestamp", "desc")
      .limit(1)
      .onSnapshot((snapshot) => {
        snapshot.docs.map((doc, index) =>
          dispatch(
            changeLink({
              link: doc.data().stream_url,
              title: doc.data().stream_title,
              tags: doc.data().tags,
            })
          )
        );
      });
    return () => {
      unsubscribe();
    };
  }, []);

  React.useEffect(() => {
    const unsubscribe = db
      ?.collection("notifications")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        let changes = [];
        snapshot.docs.forEach((snapshot) => {
          changes.push({ ...snapshot.data(), id: snapshot.id });
        });
        if (changes.length > 0) {
          dispatch(
            updateNotify({
              size: snapshot.size,
            })
          );
          dispatch(updateNotifyData({ data: changes }));
        }
      });
    return () => {
      unsubscribe();
    };
  }, []);

  const themeMain = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 1255,
        lg: 1460,
        xl: 1920,
      },
    },
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
    palette: {
      primary: {
        main: "#90CD5D",
      },
      type: checked ? "dark" : "light",
    },
    typography: {
      body1: {
        fontWeight: 500,
      },
      h5: {
        fontWeight: 500,
      },
      subtitle2: {
        fontSize: "1.1rem",
      },
    },
  });

  return (
    <div className="app">
      <Router>
        <Switch>
          <ThemeProvider theme={themeMain}>
            <Navbar />
            <AdvertiseBox id="back-to-top-anchor" />
            <Route exact path="/">
              <div className="container">
                <Box className={classes.respMainWrap} px="80px" mb="40px">
                  <Grid container direction={"row"} spacing={4} align={"start"}>
                    <Grid item xs={12} sm={12} md={8} xl={6}>
                      <VideoBox />
                    </Grid>
                    <Grid
                      item
                      className={classes.showAd}
                      xs={12}
                      sm={12}
                      md={12}>
                      <AdvertiseBox />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} xl={3}>
                      <ChannelList />
                    </Grid>
                    <Grid item className={classes.showBreak} xl={3}>
                      <AdvertiseBox />
                      <AdvertiseBox />
                    </Grid>
                    <Grid item xs={12} md={8} xl={6}>
                      <Description />
                    </Grid>
                    <Grid item xs={12} md={4} xl={3}>
                      <TwitterBox />
                    </Grid>
                    <Grid item className={classes.showBreak} xl={3}>
                      <AdvertiseBox />
                      <AdvertiseBox />
                    </Grid>
                  </Grid>
                </Box>
              </div>
            </Route>
            <Route exact path="/yardım" component={YardımPage}></Route>
            <Route exact path="/hakkımızda" component={HakkımızdaPage}></Route>
            <Route exact path="/iletisim" component={IletisimPage}></Route>
            <Footer />
            <BackToTop />
          </ThemeProvider>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
