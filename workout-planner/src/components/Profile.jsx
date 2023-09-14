import React from 'react';

const Profile = ({ userData, workoutData }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">User Profile</h2>
      <div>
        <h3 className="text-lg font-semibold mb-2">User Information</h3>
        <p>
          <strong>Name:</strong> {userData.name}
        </p>
        <p>
          <strong>Age:</strong> {userData.age}
        </p>
        <p>
          <strong>Gender:</strong> {userData.gender}
        </p>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">Workout Plan</h3>
        <p>
          <strong>Goal:</strong> {workoutData.goal}
        </p>
        <p>
          <strong>Frequency (per week):</strong> {workoutData.frequency}
        </p>
        <p>
          <strong>Average Duration (minutes):</strong> {workoutData.avgDuration}
        </p>
      </div>
    </div>
  );
};

export default Profile;
