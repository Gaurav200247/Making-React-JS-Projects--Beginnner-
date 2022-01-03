import React from "react";

const SingleItem = ({ title, price, img, desc }) => {
  return (
    <li className="menu-item">
      {" "}
      <div className="image">
        <img src={img} alt={title} />{" "}
      </div>
      <div className="info">
        <div className="info-heading">
          <span className="title">{title.toUpperCase()}</span>
          <span className="price">${price}</span>
        </div>
        <div className="rect-long"></div>
        <div className="info-desc">{desc}</div>
      </div>
    </li>
  );
};

export default SingleItem;
