import React, { useEffect, useState } from "react";
import { fetchWorkoutPlan } from "../store/workoutPlanSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../UI/Button";
const CreatePlan = () => {
  const [section, setSection] = useState(1);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [goal, setGoal] = useState("");
  const [frequency, setFrequency] = useState("");
  const [avgDuration, setAvgDuration] = useState("");
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading);
  const navigate = useNavigate();

  const handleNext = () => {
    // Check if we are in section 1
    if (section === 1) {
      // Validate inputs for section 1
      if (!name || !age || !gender) {
        alert("Please fill in all fields");
        return;
      }
    }

    // Proceed to the next section
    setSection(section + 1);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Process user inputs and create a workout plan
    const preferences = {
      name,
      age,
      gender,
      goal,
      frequency,
      avgDuration,
    };

    console.log(preferences);

    // Fetch plan
    await dispatch(fetchWorkoutPlan(preferences));
    navigate("/plan");
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <p>We need some information to recommend the best plan for you</p>
      <form onSubmit={handleFormSubmit} className="mt-4">
        {section === 1 && (
          <div>
            {/* section 1: Name, Age, Gender */}
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 font-semibold"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-3 py-2 border rounded-lg"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="age"
                className="block text-gray-700 font-semibold"
              >
                Age
              </label>
              <input
                type="number"
                id="age"
                className="w-full px-3 py-2 border rounded-lg"
                placeholder="Enter your age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="gender"
                className="block text-gray-700 font-semibold"
              >
                Gender
              </label>
              <select
                id="gender"
                className="w-full px-3 py-2 border rounded-lg"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                required
              >
                <option value="">Select your gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
        )}
        {section === 2 && (
          <div>
            {/* section 2: Workout Plan Goal, Frequency, Average Duration */}
            <div className="mb-4">
              <label
                htmlFor="goal"
                className="block text-gray-700 font-semibold"
              >
                Workout Plan Goal
              </label>
              <select
                id="goal"
                className="w-full px-3 py-2 border rounded-lg"
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                required
              >
                <option value="">Select your goal</option>
                <option value="muscle-building">Muscle Building</option>
                <option value="cardio">Cardio</option>
                <option value="weight-loss">Weight Loss</option>
              </select>
            </div>
            <div className="mb-4">
              <label
                htmlFor="frequency"
                className="block text-gray-700 font-semibold"
              >
                Frequency (per week)
              </label>
              <select
                id="frequency"
                className="w-full px-3 py-2 border rounded-lg"
                value={frequency}
                onChange={(e) => setFrequency(e.target.value)}
                required
              >
                <option value="">Select frequency</option>
                <option value="1x">1x per week</option>
                <option value="2x">2x per week</option>
                <option value="3x">3x per week</option>
                <option value="4x">4x per week</option>
                <option value="5x">5x per week</option>
              </select>
            </div>
            <div className="mb-4">
              <label
                htmlFor="avgDuration"
                className="block text-gray-700 font-semibold"
              >
                Average Duration (minutes)
              </label>
              <input
                type="number"
                id="avgDuration"
                className="w-full px-3 py-2 border rounded-lg"
                placeholder="Enter average duration"
                value={avgDuration}
                onChange={(e) => setAvgDuration(e.target.value)}
                required
              />
            </div>
          </div>
        )}
        <div className="mt-4">
          {section === 1 ? (
            <button
              type="button"
              onClick={handleNext}
              className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
            >
              Next
            </button>
          ) : (
            <div className="flex">
              <button
                type="button"
                onClick={() => setSection(section - 1)}
                className="mr-2 bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400"
              >
                Previous
              </button>
              <Button
                className={
                  "h-10 w-50 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                }
                type={"submit"}
                loading={loading}
              >
                Generate
              </Button>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default CreatePlan;
