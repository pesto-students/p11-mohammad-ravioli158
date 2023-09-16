// LoadingSpinner.js
import React from "react";
import "./LoadingSpinner.styles.css";

const LoadingSpinner = () => {
  return (
    <div className="loading-spinner-overlay">
      <div className="loading-spinner">
        <div className="spinner"></div>
      </div>
      <div className="interaction-blocker"></div>
    </div>
  );
};

export default LoadingSpinner;
