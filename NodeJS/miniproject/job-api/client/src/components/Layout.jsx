import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar"; // Import the Navbar component
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
const Layout = () => {
  const { authenticated } = useContext(AuthContext);
  if (!authenticated) {
    return <Navigate to="/signin" />;
  }
  return (
    <div>
      <Navbar /> {/* Include the Navbar component */}
      <Outlet />
    </div>
  );
};

export default Layout;
