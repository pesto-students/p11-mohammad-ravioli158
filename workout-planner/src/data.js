import equipments from "./constants/equipments";
import muscleOptions from "./constants/mucleOptions";
import workoutGoals from "./constants/workoutGoals";

// Dummy Data for workout preferences
const workoutPreferences = {
  age: 45,
  gender: "male",
  targetMuscles: [muscleOptions.Chest, muscleOptions.Arms, muscleOptions.Legs],
  frequency: 3, // workout sessions per week
  sessionLength: 30, // duration of each workout session in minutes
  equipments: [equipments.Barbell, equipments.Dumbells],
  aim: [workoutGoals.MuscleBuilding],
};

// Dummy workout plan
const workoutPlan = {
  goal: "Muscle building",
  targetMuscles: ["Chest", "Legs", "Arms", "Abs"],
  frequency: 3,
  avgDuration: 30,
  workouts: [
    {
      day: 1, //current day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
      duration: 30,
      targetMuscles: ["Chest", "Legs", "Arms"],
      exercises: [
        {
          name: "Bench Press",
          set: 3,
          reps: 10,
        },
        {
          name: "Squats",
          set: 3,
          reps: 10,
        },
        {
          name: "Bicep Curls",
          set: 3,
          reps: 10,
        },
      ],
    },
    {
      day: 3,
      duration: 30,
      targetMuscles: ["Back", "Abs"],
      exercises: [
        {
          name: "Pull-Ups",
          set: 3,
          reps: 10,
        },
        {
          name: "Planks",
          set: 3,
          reps: 60,
        },
      ],
    },
    {
      day: 5,
      duration: 30,
      targetMuscles: ["Chest", "Legs", "Arms"],
      exercises: [
        {
          name: "Dumbbell Bench Press",
          set: 3,
          reps: 10,
        },
        {
          name: "Leg Press",
          set: 3,
          reps: 10,
        },
        {
          name: "Tricep Dips",
          set: 3,
          reps: 10,
        },
      ],
    },
  ],
};

export { workoutPreferences, workoutPlan };
