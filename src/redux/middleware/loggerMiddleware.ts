import { createListenerMiddleware } from "@reduxjs/toolkit";
import { removeUser, setUser } from "../slices/userSlice";

export const loggerMiddleWare = createListenerMiddleware();
loggerMiddleWare.startListening({
  actionCreator: setUser,
  effect: () => console.log("Вы вошли в аккаунт"),
});
loggerMiddleWare.startListening({
  actionCreator: removeUser,
  effect: () => console.log("Вы вышли из аккаунта"),
});
