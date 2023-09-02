import React, { useState } from 'react';

const TaskInput = ({ onAddTask }) => {
  const [text, setText] = useState('');

  const handleAddTask = () => {
    if (text.trim() === '') return;
    onAddTask(text);
    setText('');
  };

  return (
    <div className="mt-4">
      <input
        type="text"
        placeholder="Add a new task"
        className="w-64 p-2 rounded-l-md border"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={handleAddTask}
        className="bg-blue-500 text-white p-2 rounded-r-md hover:bg-blue-600"
      >
        Add
      </button>
    </div>
  );
};

export default TaskInput;
