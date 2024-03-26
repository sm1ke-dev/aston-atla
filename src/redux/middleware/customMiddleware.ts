import { Middleware } from "@reduxjs/toolkit";

const customMiddleware: Middleware = () => (next) => (action) => next(action);
export default customMiddleware;
