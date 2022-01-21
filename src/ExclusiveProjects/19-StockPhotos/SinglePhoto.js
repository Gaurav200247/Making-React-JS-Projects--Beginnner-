import React from "react";

const SinglePhoto = ({ urls, user, likes }) => {
  const { regular, alt_description } = urls;
  const { name, portfolio_url, profile_image } = user;
  const { medium } = profile_image;
  return (
    <div className="singlephoto-container">
      <div className="image-container">
        <img className="image" src={regular} alt={alt_description} />
      </div>
      <div className="info-container">
        <div className="info">
          <h4>{name}</h4>
          <p>{likes} likes</p>
        </div>

        <a className="link" href={portfolio_url}>
          <img className="user-image" src={medium} alt={name} />
        </a>
      </div>
    </div>
  );
};

export default SinglePhoto;
