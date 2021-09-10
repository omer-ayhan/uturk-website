import { createSlice } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";

export const checkTheme = createSlice({
  name: "theme",
  initialState: {
    value: false,
  },
  reducers: {
    changeTheme: (state) => {
      state.value = !state.value;
    },
  },
});

export const { changeTheme } = checkTheme.actions;

export default combineReducers({
  checkTheme: checkTheme.reducer,
});
