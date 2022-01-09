import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-logo-container">
        <h1 className="logo">CockTails</h1>
      </div>
      <div className="nav-links-container">
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/about">
          About
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
