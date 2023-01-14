import { configureStore } from "@reduxjs/toolkit";
import layout from "../Routes/routes_slice";

export const store = configureStore({
  reducer: { layout },
  devTools: process.env.NODE_ENV !== "production",
});
