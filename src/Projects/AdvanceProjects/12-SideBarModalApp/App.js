import React from "react";
import Home from "./Home";
import Modal from "./Modal";
import SideBar from "./SideBar";

const App = () => {
  return (
    <div className="container">
      <Home />
      <SideBar />
      <Modal />
    </div>
  );
};

export default App;
