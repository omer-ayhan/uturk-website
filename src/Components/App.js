import "../css/App.css";
import AdvertiseBox from "../Components/AdvertiseBox";
import ChannelList from "../Components/ChannelList";
import Navbar from "./Navbar";
import VideoBox from "./VideoBox";
import Description from "./Description";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AdvertiseBox />
      <div className="container">
        <VideoBox />
        <ChannelList />
        <Description />
      </div>
    </div>
  );
}

export default App;
