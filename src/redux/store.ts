import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import { atlaApi } from "./atlaApi";

export const store = configureStore({
  reducer: {
    user: userReducer,
    [atlaApi.reducerPath]: atlaApi.reducer,
  },
  middleware: (getDefaultMiddlware) =>
    getDefaultMiddlware().concat(atlaApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
