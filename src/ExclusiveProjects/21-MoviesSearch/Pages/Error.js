import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="error-page">
      <h3>Ooops !!</h3>
      <h2>Error 404 | Page Not Found</h2>
      <Link to="/">
        <button className="btn btn-primary back-btn">Back to Home</button>
      </Link>
    </div>
  );
};

export default Error;
