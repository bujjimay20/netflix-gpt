import { configureStore } from "@reduxjs/toolkit";
import user from "../utils/userSlice";

const appStore = configureStore({
  reducer: {
    user,
  },
});

export default appStore;
