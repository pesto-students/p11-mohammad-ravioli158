import { useEffect, useState } from "react";
import { MdNavigateNext } from "react-icons/md";
import weekDays from "../constants/weekDays";
const WorkoutItem = ({ workout }) => {
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    // Get the current day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
    const currentDay = new Date().getDay();
    if (currentDay === workout.day) setIsActive(true);
    else setIsActive(false);
  }, [workout.day]);

  return (
    <article
      className={`workout-itFsem rounded shadow-lg flex flex-row justify-between p-4 ${
        isActive ? "text-white bg-candyRed" : "text-candyRed bg-white"
      } `}
    >
      <h2 className="font-semibold">{weekDays[workout.day]}</h2>
      <a>
        <MdNavigateNext className="text-3xl" />
      </a>
    </article>
  );
};

export default WorkoutItem;
