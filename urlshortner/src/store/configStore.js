import { configureStore } from "@reduxjs/toolkit";
import urlReducer from "./urlSlice";
export default configureStore({
  reducer: {
    urls: urlReducer,
  },
});
