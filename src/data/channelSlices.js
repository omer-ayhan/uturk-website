import { createSlice } from "@reduxjs/toolkit";
import { images } from "../Components/MainStyle";

const channels = [
  {
    name: "Bein Sports",
    logo: images.Bein,
    link: "https://www.youtube.com/embed/UyvFiG1K0W0",
    title: "Bein TV Canlı",
    tags: ["Canlı", "Bein Sport", "Maç Yayınları", "Canlı Maç", "Lig TV"],
  },
  {
    name: "Smart Sports",
    logo: images.Smart,
    link: "https://www.youtube.com/embed/mH0OxGc9-iY",
    title: "Smart Sports Canlı",
    tags: ["Canlı", "Beşiktaş", "Maç Yayınları", "Smart TV", "Lig TV"],
  },
];

const events = {
  football: [
    {
      team_name1: "fb",
      team_logo1: images.FB,
      team_name2: "gs",
      team_logo2: images.GS,
      start: "18:00",
      isLive: true,
      link: "https://www.youtube.com/embed/Qp4DOepxsB4",
      title: "Galatasaray - Fenerbahçe Maçı",
      tags: ["Canlı", "Bein Sport", "Maç Yayınları", "Canlı Maç", "Lig TV"],
    },
    {
      team_name1: "bjk",
      team_logo1: images.FB,
      team_name2: "fcb",
      team_logo2: images.GS,
      start: "20:00",
      isLive: false,
      link: "https://www.youtube.com/embed/u0T2tHbZSzQ",
      title: "Beşiktaş - Barcelona Maçı",
      tags: ["Canlı", "Beşiktaş", "Maç Yayınları", "Smart TV", "Lig TV"],
    },
  ],
  basketball: [
    {
      team_name1: "IND",
      team_logo1: images.FB,
      team_name2: "LAC",
      team_logo2: images.GS,
      start: "21:00",
      isLive: true,
      link: "https://www.youtube.com/embed/VnJy_Z7lFWY",
    },
  ],
};
export const channelSlices = createSlice({
  name: "channel",
  initialState: {
    iframe: channels[0].link,
    title: channels[0].title,
    tags: channels[0].tags,
  },
  reducers: {
    changeLink: (state, action) => {
      if (state.iframe !== action.payload.link)
        state.iframe = action.payload.link;
      if (state.title !== action.payload.title)
        state.title = action.payload.title;
      if (JSON.stringify(state.tags) !== JSON.stringify(action.payload.tags)) {
        state.tags = action.payload.tags;
      }
    },
  },
});

export { channels, events };

export const { changeLink } = channelSlices.actions;

export default channelSlices.reducer;
