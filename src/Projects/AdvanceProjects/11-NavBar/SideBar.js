import React, { useState } from "react";
// data
import { links } from "./data";

const SideBar = () => {
  const [navLinks, setNavLinks] = useState(links);
  return (
    <div className="sidebar">
      {navLinks.map((item) => {
        const { url, id, text } = item;
        return (
          <a key={id} href={url} className="side-link link">
            {text}
          </a>
        );
      })}
    </div>
  );
};

export default SideBar;
