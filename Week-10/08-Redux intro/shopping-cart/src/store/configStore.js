import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./cart";
export default configureStore({
  reducer: {
    cartItems: CartReducer,
  },
});
