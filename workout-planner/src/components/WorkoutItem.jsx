import { useEffect, useState } from "react";
import { MdNavigateNext } from "react-icons/md";
import weekDays from "../constants/weekDays";
import { Link } from "react-router-dom";
const WorkoutItem = ({ day }) => {
  const [isActive, setIsActive] = useState(false);
  // useEffect(() => {
  //   // Get the current day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
  //   const currentDay = new Date().getDay();
  //   if (currentDay === workout.day) setIsActive(true);
  //   else setIsActive(false);
  // }, [workout.day]);

  return (
    <Link to={`/plan/${day}`}>
      <article
      className={`mt-3 workout-itFsem rounded shadow-lg flex flex-row justify-between p-4 ${
        isActive ? "text-white bg-blue-500" : "text-blue-500 bg-white"
      } `}
    >
      <h2 className="font-semibold">{weekDays[day]}</h2>
      
    </article>
    </Link>
  );
};

export default WorkoutItem;
