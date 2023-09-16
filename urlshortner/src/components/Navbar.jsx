// src/components/Navbar.js
import React from "react";
import { SiOverleaf } from "react-icons/si";
const Navbar = () => {
  return (
    <nav className="bg-secondary p-4">
      <div className="mx-auto flex flex-row  items-center">
        <a href="/" className="text-white">
          <SiOverleaf className="text-4xl" />
        </a>
        <ul className=" space-x-4 text-white mt-2 ml-2">
          <li className="inline">
            <a href="/">Home</a>
          </li>
          <li className="inline">
            <a href="/contact">Contact Us</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
