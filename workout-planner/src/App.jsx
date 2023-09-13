import React from "react";
import Navbar from "./components/Navbar";
import WorkoutPlan from "./components/WorkoutPlan";
const App = ({ children }) => {
  return (
    <>
        <Navbar />
        <WorkoutPlan/>
      </>
  );
};

export default App;
