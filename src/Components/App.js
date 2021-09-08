import "../css/App.css";
import AdvertiseBox from "../Components/AdvertiseBox";
import ChannelList from "../Components/ChannelList";
import Navbar from "./Navbar";
import VideoBox from "./VideoBox";
import Description from "./Description";
import TwitterBox from "./TwitterBox";
import { Box, Grid } from "@material-ui/core";
import Footer from "./Footer";
import { ThemeProvider } from "@material-ui/core/styles";
import { themeMain } from "./MainStyle";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={themeMain}>
        <Navbar />
        <AdvertiseBox />
        <div className="container">
          <Box px="80px" mb="40px">
            <Grid container direction={"row"} spacing={4} align={"start"}>
              <Grid item xs={12} sm={8}>
                <VideoBox />
              </Grid>
              <Grid item xs={12} sm={4}>
                <ChannelList />
              </Grid>
              <Grid item xs={14} sm={8}>
                <Description />
              </Grid>
              <Grid item xs={4} sm={4}>
                <TwitterBox />
              </Grid>
            </Grid>
          </Box>
        </div>
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
