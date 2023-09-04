import { createSlice } from "@reduxjs/toolkit";

// Define the initial state for the wishlist
const initialState = [];

// Create a wishlist slice using createSlice
const wishlistSlice = createSlice({
  name: "wishlist", 
  initialState, // Initial state for the slice
  reducers: {
    // Action to add a gift to the wishlist
    addedToWishlist: (state, action) => {
      // Check if the gift is already in the wishlist
      const isAlready = state.some((gift) => gift.name === action.payload.name);
      if (!isAlready) state.push(action.payload); // Add the gift if it's not already in the wishlist
    },
    // Action to remove a gift from the wishlist
    removedFromWishlist: (state, action) => {
      // Remove the gift from the wishlist based on its name
      return state.filter((gift) => gift.name !== action.payload.name);
    },
  },
});

// Export the action creators
export const { addedToWishlist, removedFromWishlist } = wishlistSlice.actions;

// Export the wishlist reducer
export default wishlistSlice.reducer;
