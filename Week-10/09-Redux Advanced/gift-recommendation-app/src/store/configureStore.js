import { configureStore } from "@reduxjs/toolkit";
import recommendationReducer from "./slices/recommendationsSlice";
import wishlistReducer from "./slices/wishlistSlice";
const store = configureStore({
  reducer: {
    recommendations: recommendationReducer,
    wishlist: wishlistReducer,
  },
});

export default store;
