import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./Pages/Home";
import SingleMovie from "./Pages/SingleMovie";
import Error from "./Pages/Error";

const App = () => {
  return (
    <div>
      <div className="heading-container">
        <h1
          className="heading"
          style={{ cursor: "pointer" }}
          onClick={() => window.location.reload()}
        >
          Movies Search App
        </h1>
        <div className="rect"></div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/singleMovie/:id" element={<SingleMovie />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default App;
