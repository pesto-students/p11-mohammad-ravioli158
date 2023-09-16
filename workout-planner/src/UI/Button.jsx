import React from "react";
import Spinner from "./Spinner";

const Button = ({ className, type, loading = false, onClick, children }) => {
  return (
    <button
      type={type}
      className={className}
      onClick={onClick}
      disabled={loading}
    >
      {loading ? <Spinner className="" /> : children}
    </button>
  );
};

export default Button;
