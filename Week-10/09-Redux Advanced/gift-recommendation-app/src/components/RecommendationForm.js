import React, { useState } from "react";
import { fetchRecommendations } from "../store/slices/recommendationsSlice";
import { useDispatch, useSelector } from "react-redux";
const RecommendationForm = ({ isLoading, onRecommendationSubmit }) => {
  const [gender, setGender] = useState("");
  const [interests, setInterests] = useState([]);
  const [age, setAge] = useState("");
  const recommendationStatus = useSelector(
    (state) => state.recommendations.status
  );
  const dispath = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    //onRecommendationSubmit(age, gender, interests);

    //get recommendations
    dispath(fetchRecommendations({ age, gender, interests }));
  };

  return (
    <div className=" max-w-full sm:max-w-screen-sm md:max-w-screen-sm mx-auto px-4 sm:px-6 lg:px-8 p-4 bg-white ">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        Gift Recommender
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Age:</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            required
            max={120}
            min={1}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Gender:
          </label>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Interests:
          </label>
          <input
            type="text"
            placeholder="eg. hiking, art, movies"
            value={interests}
            onChange={(e) => setInterests(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            required
          />
          <p className="text-xs">* add comma separated interests</p>
        </div>
        <button
          disabled={isLoading}
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600 focus:outline-none"
        >
          {recommendationStatus === "loading" ? (
            <div>Looking for a cool gift...</div>
          ) : (
            <div>Recommend Gifts</div>
          )}
        </button>
      </form>
    </div>
  );
};

export default RecommendationForm;
