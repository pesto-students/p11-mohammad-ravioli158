import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-semibold text-xl">Workout Planner</div>
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="text-white hover:text-gray-200">
              Create New Plan
            </a>
          </li>
          <li>
            <a href="/plan" className="text-white hover:text-gray-200">
              Current Plan
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-200">
              Profile
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
