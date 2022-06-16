import { configureStore } from "@reduxjs/toolkit";
import appReducer from "../Slices/appSlice";

export const store = configureStore({
  reducer: {
    app: appReducer,
  },
});
