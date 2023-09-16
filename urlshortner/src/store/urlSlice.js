import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  isloading: false,
  urls: [],
  error: null,
};
// API base Url
const apiUrl = "https://api.shrtco.de/v2/shorten";

export const shortenUrl = createAsyncThunk(
  "urls/shortenUrl",
  async (url, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${apiUrl}?url=${url}`);
      console.log(response.data.ok);
      if (response.data.ok) return response.data.result;
      else {
        console.log("error", response.data.error);
        return rejectWithValue(response.data.error);
      }
    } catch (error) {
      console.log("error", error.response.data.error);
      return rejectWithValue(error.response.data.error);
    }
  }
);

const urlSlice = createSlice({
  name: "urls",
  initialState,
  reducers: {
    clearError: (state, action) => {
      state.error = null;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(shortenUrl.pending, (state, action) => {
        state.isloading = true;
      })
      .addCase(shortenUrl.fulfilled, (state, action) => {
        state.isloading = false;

        state.urls.unshift(action.payload); // Add the value to the beginning of the array

        // If the array size exceeds maxSize, remove the last element
        if (state.urls.length > 3) {
          state.urls.pop();
        }
      })
      .addCase(shortenUrl.rejected, (state, action) => {
        state.isloading = false;
        state.error = action.payload;
      });
  },
});
export const { clearError } = urlSlice.actions;
export default urlSlice.reducer;
