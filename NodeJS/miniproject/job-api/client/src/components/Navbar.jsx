import React, { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { authenticated } = useContext(AuthContext);

  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-semibold">Remote Jobs</div>
        <div>
         
          {/* Show "Sign out" when authenticated */}
          {authenticated && (
            <Link
              onClick={() => {
                window.localStorage.setItem("authenticated", "");
                Navigate('/signin')
              }}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Sign out
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
