import { configureStore } from "@reduxjs/toolkit";
import detailsReducer from "../Reducer/Reduce";

export const store = configureStore({
  reducer: {
    details: detailsReducer,
  },
});
