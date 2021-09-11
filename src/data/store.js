import { configureStore } from "@reduxjs/toolkit";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import navReducer from "./navSlices";
import channelReducer from "./channelSlices";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persisted = persistReducer(persistConfig, navReducer);

export default configureStore({
  reducer: {
    nav: persisted,
    channel: channelReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
