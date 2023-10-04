import { useContext } from "react";
import { Link, Navigate, useOutlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Navbar from "./Navbar";
// ...

export const ProtectedLayout = () => {
  const outlet = useOutlet();

  const { authenticated } = useContext(AuthContext);
  if (!authenticated) {
    return <Navigate to="/signin" />;
  }
  return (
    <div>
      <Navbar />
      {outlet}
    </div>
  );
};
