import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import { atlaApi } from "./atlaApi";
import { loggerMiddleWare } from "./middleware/loggerMiddleware";

export const store = configureStore({
  reducer: {
    user: userReducer,
    [atlaApi.reducerPath]: atlaApi.reducer,
  },
  middleware: (getDefaultMiddlware) =>
    getDefaultMiddlware().concat(
      atlaApi.middleware,
      loggerMiddleWare.middleware
    ),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
