import "../css/App.css";
import AdvertiseBox from "../Components/AdvertiseBox";
import ChannelList from "../Components/ChannelList";
import Navbar from "./Navbar";
import VideoBox from "./VideoBox";
import Description from "./Description";
import TwitterBox from "./TwitterBox";
import { Box, Grid } from "@material-ui/core";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AdvertiseBox />
      <div className="container">
        <Box px="80px" mb="50px">
          <Grid container direction={"row"} spacing={4} align={"start"}>
            <Grid item xs={14} sm={8}>
              <VideoBox />
            </Grid>
            <Grid item xs={4} sm={4}>
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
    </div>
  );
}

export default App;
