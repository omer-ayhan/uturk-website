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
  },
  reducers: {
    changeLang: (state, action) => {
      if (state.flag !== action.payload) state.flag = action.payload;
    },
    changeTheme: (state) => {
      state.theme = !state.theme;
    },
    updateNotify: (state) => {
      state.reset = true;
    },
  },
});

export { langs };

export const { changeTheme, changeLang, updateNotify } = navSlices.actions;

export default navSlices.reducer;
