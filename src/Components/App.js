import "../css/App.css";
import AdvertiseBox from "../Components/AdvertiseBox";
import ChannelList from "../Components/ChannelList";
import Navbar from "./Navbar";
import VideoBox from "./VideoBox";
import Description from "./Description";
import TwitterBox from "./TwitterBox";
import { Box, createTheme, Grid, ThemeProvider } from "@material-ui/core";
import Footer from "./Footer";
import BackToTop from "./BackToTop";
import { useSelector } from "react-redux";

function App() {
  const checked = useSelector((state) => state.theme.checkTheme.value);

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
    palette: {
      primary: {
        main: "#90CD5D",
      },
      type: checked ? "dark" : "light",
      background: {
        paper: checked ? "#1a1a1a" : "#fff",
      },
    },
    typography: {
      body1: {
        fontWeight: 500,
      },
      h5: {
        fontWeight: 500,
      },
    },
  });

  console.log(themeMain.palette.type);
  return (
    <ThemeProvider theme={themeMain}>
      <Navbar />
      <AdvertiseBox id="back-to-top-anchor" />
      <div className="container">
        <Box px="80px" mb="40px">
          <Grid container direction={"row"} spacing={4} align={"start"}>
            <Grid item xs={12} sm={8}>
              <VideoBox />
            </Grid>
            <Grid item xs={12} sm={4}>
              <ChannelList />
            </Grid>
            <Grid item xs={12} sm={8}>
              <Description />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TwitterBox />
            </Grid>
          </Grid>
        </Box>
      </div>
      <Footer />
      <BackToTop />
    </ThemeProvider>
  );
}

export default App;
