import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = process.env.REACT_APP_OPENAI_API_KEY;

// Define the initial state for the recommendations slice
const initialState = {
  status: "idle",
  recommendations: [],
  error: null,
};

// Create an async thunk to fetch recommendations from the OpenAI API
export const fetchRecommendations = createAsyncThunk(
  "recommendations/fetchRecommendations", // Action name
  async ({ age, gender, interests }, { rejectWithValue }) => {
    const headers = {
      "content-type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    };

    const data = {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: `Give me 5 ideas for ${age} year old ${gender} who likes ${interests}`,
        },
      ],
    };

    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        data,
        { headers }
      );

      // Format the response data
      const result = response.data.choices[0].message.content
        .split(/\d+\.\s+/) // Split the content into sentences
        .filter((sentence) => sentence.trim() !== "") // Remove empty sentences
        .map((sentence) => {
          const [name, description] = sentence.split(":"); // Split sentence into name and description
          return { name, description };
        });

      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Create the recommendations slice using createSlice
const recommendationsSlice = createSlice({
  name: "recommendations", // Slice name
  initialState, // Initial state
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchRecommendations.pending, (state, action) => {
        // Set the status to "loading" when the request is pending
        state.status = "loading";
      })
      .addCase(fetchRecommendations.fulfilled, (state, action) => {
        // Set the status to "succeeded" and store the fetched recommendations when the request is fulfilled
        state.status = "succeeded";
        state.recommendations = action.payload;
      })
      .addCase(fetchRecommendations.rejected, (state, action) => {
        // Set the status to "failed" and store the error when the request is rejected
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default recommendationsSlice.reducer; // Export the reducer
