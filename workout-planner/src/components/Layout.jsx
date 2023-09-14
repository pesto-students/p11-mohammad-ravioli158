import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="m-auto mt-8 h-full p-4 md:max-w-md">
      <Outlet />
      </div>
    </>
  );
};

export default Layout;
