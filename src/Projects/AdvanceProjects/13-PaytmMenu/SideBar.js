import React from "react";
import sublinks from "./data";
import { ImCross } from "react-icons/im";
import { useGlobalContext } from "./Context";

const SideBar = () => {
  const { IsSideBar, CloseSidebar } = useGlobalContext();
  return (
    //   Class toggle here
    <div className={`sidebar-overlay ${IsSideBar ? "show-sidebar" : null}`}>
      <div className="sidebar-container">
        <div className="cross-container">
          <ImCross className="sidebar-cross-icon" onClick={CloseSidebar} />
        </div>
        {sublinks.map((item, index) => {
          const { page, links } = item;
          return (
            // sidebar-links starts
            <li key={index} className="sidebar-links">
              <span className="link-heading">{page.toUpperCase()}</span>
              {/* sublink container starts*/}
              <div className="sidebar-sublinks-container">
                {links.map((item, index) => {
                  const { label, icon, url } = item;
                  return (
                    // sublink starts
                    <a key={index} className="sidebar-sublinks" href={url}>
                      <span className="sublinks-icon">{icon}</span>{" "}
                      {label.toUpperCase()}
                    </a>
                    //   sublink ends
                  );
                })}
              </div>
              {/* sublink container ends */}
            </li>
            //   sidebar links ends
          );
        })}
      </div>
    </div>
  );
};

export default SideBar;
