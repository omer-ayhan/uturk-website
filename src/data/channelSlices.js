import { createSlice } from "@reduxjs/toolkit";

export const channelSlices = createSlice({
  name: "channel",
  initialState: {
    iframe: "",
    title: "",
    tags: [],
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

export const { changeLink } = channelSlices.actions;

export default channelSlices.reducer;
