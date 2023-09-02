import { createSlice } from "@reduxjs/toolkit";

// Initial state for the cart
const initialState = [];

// Selector function to select a product by its ID (not used in the code)
export const selectProductById = (state) => state.id;

// Create a slice for the cart
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Action to add a product to the cart
    productAdded: (state, action) => {
      state.push(action.payload);
    },
    // Action to remove a product from the cart
    productRemoved: (state, action) => {
      // Filter out the product with the matching ID
      return state.filter((product) => product.id !== action.payload);
    },
    // Action to increase the quantity of a product in the cart
    quantityIncreased: (state, action) => {
      // Find the index of the product with the matching ID
      const index = state.findIndex((p) => p.id === action.payload);
      if (index !== -1) state[index].quantity++;
    },
    // Action to decrease the quantity of a product in the cart
    quantityDecreased(state, action) {
      // Find the index of the product with the matching ID
      const index = state.findIndex((p) => p.id === action.payload);
      // Get a reference to the cart item
      const cartItem = state[index];
      // Decrease the quantity of the cart item
      cartItem.quantity--;
    },
  },
});

// Export the action creators
export const {
  productAdded,
  quantityIncreased,
  quantityDecreased,
  productRemoved,
} = cartSlice.actions;

// Export the cart reducer
export default cartSlice.reducer;
