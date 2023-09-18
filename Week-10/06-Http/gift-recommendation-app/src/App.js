import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";

function App() {
  return (
    <Router>
      <div>
        <Main />
      </div>
    </Router>
  );
}

export default App;
