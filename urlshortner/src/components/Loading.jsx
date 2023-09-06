// Loading.js
import React from "react";
import LoadingSpinner from "./LoadingSpinner"; 
import { useSelector } from "react-redux";

const Loading = ({ children }) => {
  const isLoading = useSelector((state) => state.urls.isloading);

  return (
    <div>
      {isLoading && <LoadingSpinner />}
      {children}
    </div>
  );
};

export default Loading;
