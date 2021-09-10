import { createSlice } from "@reduxjs/toolkit";
import { images } from "../Components/MainStyle";

const langs = [
  { label: "TR", flag: images.TR_flag },
  { label: "EN", flag: images.US_flag },
];

export const navSlices = createSlice({
  name: "nav",
  initialState: {
    flag: langs[0].flag,
    value: false,
  },
  reducers: {
    changeLang: (state, action) => {
      state.flag = action.payload;
    },
    changeTheme: (state) => {
      state.value = !state.value;
    },
  },
});

export { langs };

export const { changeTheme, changeLang } = navSlices.actions;

export default navSlices.reducer;
