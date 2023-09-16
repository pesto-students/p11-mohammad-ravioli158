// src/App.js
import React from "react";
import Navbar from "./components/Navbar";
import Loading from "./components/Loading";
import ErrorModal from "./components/ErrorModal";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";

function App() {
  return (
    <div className="text-textColor">
      <Loading>
        <ErrorModal>
          <Navbar />
          <RouterProvider router={router} />
        </ErrorModal>
      </Loading>
    </div>
  );
}

export default App;
