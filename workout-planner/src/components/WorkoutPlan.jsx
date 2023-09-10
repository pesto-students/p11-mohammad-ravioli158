import React from "react";
import { workoutPlan } from "../data";
import WorkoutItem from "./WorkoutItem";

const WorkoutPlan = () => {
  return (
    <section className="h-full">
      <article className="bg-radial-gradient  p-4 plan-info text-white">
        <div>
          <h1 className="text-xl font-bold">{workoutPlan.goal}</h1>
          <p className="mt-3">
            <span>Target Muscles: </span>
            <span>{workoutPlan.targetMuscles.join(", ")}</span>
          </p>
        </div>
        <footer className="mt-10">Average Duration: 30 minutes</footer>
      </article>
      <ul className="workouts p-2 bg-[#e3e3e3] [&>*:not(:first-child)]:mt-3">
        {workoutPlan.workouts.map((workout) => (
          <WorkoutItem key={workout.day} workout={workout} />
        ))}
      </ul>
    </section>
  );
};

export default WorkoutPlan;
