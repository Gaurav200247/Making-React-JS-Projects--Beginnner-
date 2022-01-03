import React from "react";

const SinglePerson = ({ name, image, age }) => {
  return (
    <li className="single-item">
      <img src={image} alt={name} />
      <div className="info">
        <h5>{name}</h5>
        <span>Age : {age}</span>
      </div>
    </li>
  );
};

export default SinglePerson;
