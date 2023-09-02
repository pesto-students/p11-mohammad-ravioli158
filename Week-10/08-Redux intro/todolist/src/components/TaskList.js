import React from 'react';
const TaskList = ({ tasks, onToggleTask, onDeleteTask }) => {
  return (
    <ul className="mt-4 space-y-2">
      {tasks.map((task) => (
        <li key={task.id} className="flex items-center">
          <input
            type="checkbox"
            className="mr-2 form-checkbox text-blue-500"
            checked={task.completed}
            onChange={() => onToggleTask(task.id)}
          />
          <span className={task.completed ? 'line-through text-gray-500' : ''}>
            {task.title}
          </span>
          <button
            onClick={() => onDeleteTask(task.id)}
            className="ml-2 text-red-500 hover:text-red-600"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
