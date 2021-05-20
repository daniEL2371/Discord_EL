import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/UserSlice";
import appReducer from "../features/app/appSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    app: appReducer,
  },
});
