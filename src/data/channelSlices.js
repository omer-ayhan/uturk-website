import { createSlice } from "@reduxjs/toolkit";

export const channelSlices = createSlice({
  name: "channel",
  initialState: {
    iframe: "",
    title: "",
    tags: [],
    user: null,
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
    logUser: (state, action) => {
      if (state.user === null) state.user = action.payload.user;
    },
  },
});

export const { changeLink, logUser } = channelSlices.actions;

export default channelSlices.reducer;
