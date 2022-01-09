import React from "react";
import { Link } from "react-router-dom";

const Cocktail = ({ id, name, image, glass, info }) => {
  return (
    <div className="cocktail-thumbnail">
      <div className="thumbnail-img-container">
        <img className="image" src={image} alt={name} />
      </div>
      <div className="thumbnail-info">
        <h4 className="name">{name}</h4>
        <h5 className="info">{info}</h5>
        <p className="glass">{glass}</p>
        <Link to={`/cocktail/${id}`}>
          <button className="btn btn-success details">DETAILS</button>
        </Link>
      </div>
    </div>
  );
};

export default Cocktail;
