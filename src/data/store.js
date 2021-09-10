import { configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import navReducer from "./navSlices";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persisted = persistReducer(persistConfig, navReducer);

export default configureStore({
  reducer: {
    theme: persisted,
  },
});
