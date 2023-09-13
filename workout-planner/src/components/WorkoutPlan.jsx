import React, {useEffect, useState} from "react";
import WorkoutItem from "./WorkoutItem"; // Assuming you have a WorkoutItem component
import { workoutPlan } from "../data";
const WorkoutPlan = () => {
  useEffect(() => {
  }, [])
  

  return (
    <div className="p-4 rounded-lg shadow-m">
      <h2 className="text-xl font-semibold mb-4">Workout Plan</h2>
      <ul>
        {workoutPlan.days.map((workout) => (
          <WorkoutItem key={workout.day} day={workout.day} />
        ))}
      </ul>
    </div>
  );
};

export default WorkoutPlan;
