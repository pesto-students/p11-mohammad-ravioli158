import React from 'react';

function ExerciseItem({ exercise}) {
    const {name, reps, set} = exercise
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4">
    <h3 className="text-xl font-semibold mb-2">{name}</h3>
    <p className="text-gray-700">Repetitions: {reps}</p>
    <p className="text-gray-700">Sets: {set}</p>
  </div>
  );
}

export default ExerciseItem;
