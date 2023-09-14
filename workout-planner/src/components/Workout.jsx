import { useParams } from 'react-router-dom';
import weekDays from '../constants/weekDays';
import { useSelector } from 'react-redux';
import ExerciseItem from './ExerciseItem';
const Workout = () => {

const day = parseInt(useParams().day);
const workout = useSelector(state => state.plan.days.filter(workout => workout.day === day)[0])
 

  
  const toRender = (false?<div>loading...</div> : <div className="bg-white p-4 rounded-lg shadow-md h-full">
   
  <h2 className="text-xl font-semibold">{weekDays[workout.day]}</h2>
  <ul>
    {workout.exercises.map((exercise, index) => (
      <ExerciseItem key={exercise.name} exercise={exercise}/>
    ))}
  </ul>
</div>)
  return (
    toRender
  );
};

export default Workout;
