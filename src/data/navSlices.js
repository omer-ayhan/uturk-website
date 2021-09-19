import { createSlice } from "@reduxjs/toolkit";
import { images } from "../Components/MainStyle";

const langs = [
  { label: "tr", flag: images.TR_flag },
  { label: "en", flag: images.US_flag },
];

export const navSlices = createSlice({
  name: "nav",
  initialState: {
    flag: langs[0].flag,
    theme: true,
    reset: false,
    notify_size: 0,
    notify_num: 0,
  },
  reducers: {
    changeLang: (state, action) => {
      if (state.flag !== action.payload) state.flag = action.payload;
    },
    changeTheme: (state) => {
      state.theme = !state.theme;
    },
    resetNotify: (state) => {
      state.reset = true;
      state.notify_num = 0;
    },
    updateNotify: (state, action) => {
      if (state.notify_size !== action.payload.size) {
        state.notify_size = action.payload.size;
        state.notify_num += 1;
        console.log("different");
      } else {
        console.log("same");
      }
    },
    removeNotify: (state) => {
      if (state.notify_size >= 0) state.notify_size -= 1;
    },
  },
});

export { langs };

export const {
  changeTheme,
  changeLang,
  resetNotify,
  updateNotify,
  removeNotify,
} = navSlices.actions;

export default navSlices.reducer;
