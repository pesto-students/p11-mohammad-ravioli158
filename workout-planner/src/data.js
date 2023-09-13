
// Sample workout plan data
export let workoutPlan = {
  goal: 'Muscle building',
  targetMuscles: ['Chest', 'Legs', 'Arms', 'Abs'],
  frequency: 3,
  avgDuration: 30,
  days: [
    {
      day: 1,
      duration: 30,
      targetMuscles: ['Chest', 'Legs', 'Arms'],
      exercises: [
        {
          name: 'Bench Press',
          set: 3,
          reps: 10,
        },
        {
          name: 'Squats',
          set: 3,
          reps: 10,
        },
        {
          name: 'Bicep Curls',
          set: 3,
          reps: 10,
        },
      ],
    },
    {
      day: 3,
      duration: 30,
      targetMuscles: ['Back', 'Abs'],
      exercises: [
        {
          name: 'Pull-Ups',
          set: 3,
          reps: 10,
        },
        {
          name: 'Planks',
          set: 3,
          reps: 60,
        },
      ],
    },
    {
      day: 5,
      duration: 30,
      targetMuscles: ['Chest', 'Legs', 'Arms'],
      exercises: [
        {
          name: 'Dumbbell Bench Press',
          set: 3,
          reps: 10,
        },
        {
          name: 'Leg Press',
          set: 3,
          reps: 10,
        },
        {
          name: 'Tricep Dips',
          set: 3,
          reps: 10,
        },
      ],
    },
  ],
};

