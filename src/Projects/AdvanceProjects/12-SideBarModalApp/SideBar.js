import React from "react";
import { links, social } from "./data";
import { ImCross } from "react-icons/im";
import logo from "../../../styles/Images/Logo.png";
import { useGlobalContext } from "./UseContext";

const SideBar = () => {
  const { CloseSidebar, isSideBar } = useGlobalContext();
  return (
    <div className={`sidebar ${isSideBar ? "show-sidebar" : null}`}>
      {/* links container starts */}
      <div className="links-container">
        {/* head starts*/}
        <div className="sidebar-head">
          <img className="logo" src={logo} alt="ReactJSDev" />
          <ImCross className="cross-icon" onClick={CloseSidebar} />
        </div>
        {/* head ends*/}

        {/* links starts*/}
        {links.map((item) => {
          const { url, id, text, icon } = item;
          return (
            <a key={id} href={url} className="link">
              <span className="sidebar-icon">{icon}</span> {text}
            </a>
          );
        })}
        {/* links ends */}
      </div>
      {/* links container ends */}

      {/* social container starts */}
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
      {/* social container ends */}
    </div>
  );
};

export default SideBar;
