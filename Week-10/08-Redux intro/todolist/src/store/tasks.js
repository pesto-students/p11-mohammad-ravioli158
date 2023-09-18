import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [];
const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    taskAdded: {
      reducer(state, action) {
        state.push(action.payload.task);
      },
      prepare(title) {
        return {
          payload: {
            task: {
              id: nanoid(),
              title,
              completed: false,
            },
          },
        };
      },
    },
    taskRemoved: (state, action) => {
      return state.filter((task) => task.id !== action.payload);
    },
    taskCompleted: (state, action) => {
      const index = state.findIndex((task) => task.id === action.payload);
      // Update the task if found
      if (index !== -1) {
        state[index].completed = true;
      }
    },
  },
});
export const { taskAdded, taskRemoved, taskCompleted } = todosSlice.actions;
export default todosSlice.reducer;
