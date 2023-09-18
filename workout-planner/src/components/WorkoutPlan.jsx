import WorkoutItem from "./WorkoutItem"; // Assuming you have a WorkoutItem component
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const WorkoutPlan = () => {

const loading = useSelector(state => state.loading)
 const workoutPlan = useSelector(state => state.plan)
 const navigate = useNavigate()

 useEffect(() => {
  if(workoutPlan.days.length === 0)
  navigate('/newplan')
 }, [workoutPlan.days.length, navigate])
 
let renderComponent = ( (loading === true) ? <div>loading..</div> :  <div className="h-full rounded-lg shadow-m">
  <h2 className="text-xl font-semibold mb-4 text-center" >Workout Plan</h2>
  <ul>
    {workoutPlan.days.map((workout) => (
      <WorkoutItem key={workout.day} day={workout.day} />
    ))}
  </ul>
</div>)
  return (
   renderComponent
  );
};

export default WorkoutPlan;
