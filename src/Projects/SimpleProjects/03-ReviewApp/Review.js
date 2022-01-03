import React, { useState } from "react";
import data from "./data";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

const Review = () => {
  const [index, setindex] = useState(0);

  const { name, image, job, text } = data[index];

  const checkNumber = (num) => {
    if (num > data.length - 1) {
      return 0;
    }
    if (num < 0) {
      return data.length - 1;
    }
    return num;
  };

  const ToRight = () => {
    setindex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const ToLeft = () => {
    setindex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const SupriseMe = () => {
    let randnum = Math.ceil(Math.random() * data.length) - 1;
    setindex(() => {
      return randnum;
    });
  };

  return (
    <div className="main-container">
      <h1>Our Reviews</h1>
      <div className="rect"></div>
      <div className="sub-container">
        <div className="review-container">
          <img className="image" src={image} alt={name} />
          <span className="name">{name.toUpperCase()}</span>
          <span className="job">{job.toUpperCase()}</span>
          <p className="text">{text}</p>
        </div>
        <div className="toggle-btn-container">
          <span className="toggle-btn" onClick={ToRight}>
            <AiOutlineLeft />
          </span>
          <span className="toggle-btn" onClick={ToLeft}>
            <AiOutlineRight />
          </span>
        </div>
        <button className="btn btn-primary" onClick={SupriseMe}>
          surprise me
        </button>
      </div>
    </div>
  );
};

export default Review;
