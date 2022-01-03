import React from "react";
import { links, social } from "./data";
const SideBar = () => {
  return (
    <div className="sidebar">
      {links.map((item) => {
        const { url, id, text } = item;
        return (
          <a key={id} href={url} className="links">
            {text}
          </a>
        );
      })}
      <div className="social-container">
        {social.map((item) => {
          const { id, name, url, icon } = item;
          return (
            <a key={id} href={url} className={`social-media-icon ${name}`}>
              {icon}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default SideBar;
