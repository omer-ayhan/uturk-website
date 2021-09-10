import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./navSlices";

export default configureStore({
  reducer: {
    theme: navReducer,
  },
});
