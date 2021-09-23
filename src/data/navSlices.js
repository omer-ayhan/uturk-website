import { createSlice } from "@reduxjs/toolkit";
import { images } from "../Components/MainStyle";
import { v4 as uuidv4 } from "uuid";

const langs = [
  { label: "tr", flag: images.TR_flag, id: uuidv4() },
  { label: "en", flag: images.US_flag, id: uuidv4() },
];

export const navSlices = createSlice({
  name: "nav",
  initialState: {
    flag: langs[0].flag,
    theme: true,
    reset: false,
    notify_size: 0,
    notify_num: 0,
    lang: "tr",
    user: null,
    isMatched: false,
  },
  reducers: {
    changeLang: (state, action) => {
      if (state.flag !== action.payload.flag) {
        state.flag = action.payload.flag;
        state.lang = action.payload.label;
      }
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
      }
    },
    removeNotify: (state) => {
      if (state.notify_size >= 0) state.notify_size -= 1;
    },
    logUser: (state, action) => {
      state.user = action.payload.user;
      state.isMatched = action.payload.isMatched;
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
  logUser,
} = navSlices.actions;

export default navSlices.reducer;
