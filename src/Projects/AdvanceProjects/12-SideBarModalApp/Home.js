import React from "react";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./UseContext";

const Home = () => {
  const { OpenModal, OpenSidebar } = useGlobalContext();
  return (
    <div>
      <button className="toggle-btn" onClick={OpenSidebar}>
        <FaBars />
      </button>
      <button className="btn modal-btn" onClick={OpenModal}>
        show modal
      </button>
    </div>
  );
};

export default Home;
