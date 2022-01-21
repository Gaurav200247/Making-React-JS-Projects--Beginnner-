import React from "react";

const Follower = ({ login, avatar_url, html_url }) => {
  return (
    <div className="follower-container">
      <div className="image-container">
        <img src={avatar_url} alt={login} className="image" />
      </div>
      <h4 className="link-container">
        <a className="link" href={html_url}>
          {login}
        </a>
      </h4>
    </div>
  );
};

export default Follower;
