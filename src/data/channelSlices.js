import { createSlice } from "@reduxjs/toolkit";
import { images } from "../Components/MainStyle";

const channel = [
  {
    name: "Bein Sports",
    logo: images.Bein,
    link: "https://www.youtube.com/embed/UyvFiG1K0W0",
  },
  {
    name: "Smart Sports",
    logo: images.Smart,
    link: "https://www.youtube.com/embed/mH0OxGc9-iY",
  },
];

const event = [
  {
    team_name1: "fb",
    team_logo1: images.FB,
    team_name2: "gs",
    team_logo2: images.GS,
    start: "18:00",
    isLive: true,
    link: "https://www.youtube.com/embed/Qp4DOepxsB4",
  },
  {
    team_name1: "bjk",
    team_logo1: images.FB,
    team_name2: "fcb",
    team_logo2: images.GS,
    start: "20:00",
    isLive: false,
    link: "https://www.youtube.com/embed/u0T2tHbZSzQ",
  },
  {
    team_name1: "bjk",
    team_logo1: images.FB,
    team_name2: "fcb",
    team_logo2: images.GS,
    start: "20:00",
    isLive: true,
    link: "https://www.youtube.com/embed/u0T2tHbZSzQ",
  },
  {
    team_name1: "bjk",
    team_logo1: images.FB,
    team_name2: "fcb",
    team_logo2: images.GS,
    start: "20:00",
    isLive: false,
    link: "https://www.youtube.com/embed/u0T2tHbZSzQ",
  },
];

export const channelSlices = createSlice({
  name: "channel",
  initialState: {
    iframe: channel[0].link,
  },
  reducers: {
    changeLink: (state, action) => {
      if (state.iframe !== action.payload) state.iframe = action.payload;
    },
  },
});

export { channel, event };

export const { changeLink } = channelSlices.actions;

export default channelSlices.reducer;
