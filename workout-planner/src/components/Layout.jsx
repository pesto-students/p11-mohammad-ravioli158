import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="page-wrapper">{children}</div>
    </>
  );
};

export default Layout;
