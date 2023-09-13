import { createContext, useContext, useState } from "react";
import { data } from "../data";

export const WorkoutContext = createContext();

const WorkoutPlanProvider = ({ children }) => {
//   const [workoutPlan, setWorkoutPlan] = useState({
//     days: [],
//   });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const fetchWorkoutPlan = async () => {
//     setLoading(true)
//     setTimeout(() => {
//         setLoading(false)
//         setWorkoutPlan(data)
//     }, 4000);
//   };

  return (
    <WorkoutContext.Provider
    //   value={{ workoutPlan, loading, error, fetchWorkoutPlan }}
    >
      {children}
    </WorkoutContext.Provider>
  );
};
export { WorkoutPlanProvider };

export function useAPI() {
  const context = useContext(WorkoutContext);
  return context;
}
