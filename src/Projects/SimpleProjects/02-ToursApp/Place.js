import React, { useState } from "react";

const Place = ({ id, image, name, info, price, deleteItem }) => {
  const [showText, setShowText] = useState(false);
  return (
    <li className="single-place">
      <img src={image} className="image" alt={name} />
      <div className="info">
        <h4 className="place-name">{name}</h4>
        <h6 className="price">${price}</h6>
      </div>
      <p>
        {showText ? info : `${info.substring(0, 200)}...`}
        <button className="readmore-btn" onClick={() => setShowText(!showText)}>
          {showText ? "show less" : "read more"}
        </button>
      </p>

      <button className="btn btn-danger" onClick={() => deleteItem(id)}>
        Not Interested
      </button>
    </li>
  );
};

export default Place;
