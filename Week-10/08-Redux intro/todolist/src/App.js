import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { taskAdded, taskRemoved, taskCompleted } from "./store/tasks";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
const App = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);
  const addTask = (title) => {
    dispatch(taskAdded(title));
  };
  const toggleTask = (taskId) => {
    dispatch(taskCompleted(taskId));
  };

  const deleteTask = (taskId) => {
    dispatch(taskRemoved(taskId));
  };
  return (
    <div className="mx-auto max-w-md p-4">
      <h1 className="text-2xl font-semibold mb-4">Task Management App</h1>
      <TaskInput onAddTask={addTask} />
      <TaskList
        tasks={tasks}
        onToggleTask={toggleTask}
        onDeleteTask={deleteTask}
      />
    </div>
  );
};

export default App;
