import { createSlice } from "@reduxjs/toolkit";
import { images } from "../Components/MainStyle";
import { db } from "../firebaseConf";

let snapshot = db.collection("permanent");
const getChannels = [];
let firstData;

const channels = [
  {
    name: "Bein Sports",
    logo: images.Bein,
    link: "https://www.youtube.com/embed/UyvFiG1K0W0",
    title: "Bein TV Canlı",
    tags: ["Canlı", "Bein Sport", "Maç Yayınları", "Canlı Maç", "Lig TV"],
  },
];

snapshot
  .orderBy("timestamp", "desc")
  .limit(1)
  .onSnapshot((snapshot) => {
    snapshot?.forEach((doc) => getChannels.push(doc.data()));
    firstData = getChannels[0];
    console.log(firstData.stream_url);
  });

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

export { channels };

export const { changeLink } = channelSlices.actions;

export default channelSlices.reducer;
