import { configureStore } from "@reduxjs/toolkit";
import { atlaApi } from "./atlaApi";

export const store = configureStore({
  reducer: {
    [atlaApi.reducerPath]: atlaApi.reducer,
  },
  middleware: (getDefaultMiddlware) =>
    getDefaultMiddlware().concat(atlaApi.middleware),
});
