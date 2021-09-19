import { createSlice } from "@reduxjs/toolkit";

export const notifySlices = createSlice({
  name: "nav",
  initialState: {
    notify_data: null,
  },
  reducers: {
    updateNotifyData: (state, action) => {
      state.notify_data = action.payload.data;
    },
  },
});

export const { updateNotifyData } = notifySlices.actions;

export default notifySlices.reducer;
