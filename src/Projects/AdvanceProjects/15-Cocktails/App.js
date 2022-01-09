import React from "react";
import Navbar from "./Components/Navbar";

import Home from "./Pages/Home";
import Error from "./Pages/Error";
import About from "./Pages/About";
import SingleCocktail from "./Pages/SingleCocktail";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cocktail/:id" element={<SingleCocktail />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default App;
