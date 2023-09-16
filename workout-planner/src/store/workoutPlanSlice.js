import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";
const initialState = { 
    loading: false,
    plan: {
        days:[]
    },
    error: null
 }
 // Fetch workout plan
 const fetchWorkoutPlan = createAsyncThunk('workoutPlan/fetchWorkout', async (preferences, {rejectWithValue}) => {
    try {
        // Simulate a 1-second delay
        await new Promise(resolve => setTimeout(resolve, 6000));

        // Mock workout API
        const response = await axios.get('https://mocki.io/v1/ba99f198-a5e7-4ac5-a0ae-563e7992b35b');
        return response.data;
    } catch (error) {
        rejectWithValue(error.message);
    }
});





const workoutSlice = createSlice({
    name:'workoutPlan',
    initialState,
    reducers:{},
    extraReducers(builder){
        builder
        .addCase(fetchWorkoutPlan.pending, (state, action) => {
            state.loading = true
        })
        .addCase(fetchWorkoutPlan.fulfilled, (state, action) => {
            state.loading = false
            state.plan = action.payload
        })
        .addCase(fetchWorkoutPlan.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        })
    }
})

export {fetchWorkoutPlan}
export default workoutSlice.reducer