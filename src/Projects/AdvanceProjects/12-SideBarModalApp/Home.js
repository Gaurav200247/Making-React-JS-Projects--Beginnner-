import React from "react";
import { FaBars } from "react-icons/fa";

const Home = () => {
  return (
    <div>
      <button className="toggle-btn">
        <FaBars />
      </button>
      <button className="btn btn-warning">show modal</button>
    </div>
  );
};

export default Home;
