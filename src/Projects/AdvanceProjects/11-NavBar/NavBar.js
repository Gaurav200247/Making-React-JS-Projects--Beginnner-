import React, { useState, useEffect, useRef } from "react";
// toggle-btn
import { GoThreeBars } from "react-icons/go";
// logo
import logo from "../../../styles/Images/Logo.png";
// tours
import Tours from "../../SimpleProjects/02-ToursApp/Tours";
import "../../../styles/css/02-Tours.css";
// data
import { links, social } from "./data";

const NavBar = () => {
  const [isSidebar, setIsSidebar] = useState(false);
  const LinksContainerRef = useRef(null);
  const LinksRef = useRef(null);

  const ShowSideBar = () => {
    setIsSidebar(!isSidebar);
  };

  const setsidebarfalse = () => {
    if (window.innerWidth > 900) {
      setIsSidebar(false);
    }
  };

  useEffect(() => {
    const linksHeight =
      LinksRef.current.getBoundingClientRect().height * links.length;
    if (isSidebar) {
      LinksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      LinksContainerRef.current.style.height = "0px";
    }
    window.addEventListener("resize", setsidebarfalse);

    return () => window.removeEventListener("resize", setsidebarfalse);
  }, [isSidebar, window]);

  return (
    <div>
      <nav>
        {/* logo starts */}
        <div className="logo-container">
          <img className="logo" src={logo} alt="logo" />
        </div>
        {/* logo ends */}

        {/* links container starts */}
        <div className="links-container">
          {links.map((item) => {
            const { url, id, text } = item;
            return (
              <a key={id} href={url} className="link">
                {text}
              </a>
            );
          })}
        </div>
        {/* links container ends */}

        {/* social media container starts */}
        <div className="social-media-container">
          {social.map((item) => {
            const { id, name, url, icon } = item;
            return (
              <a key={id} href={url} className={`social-media-icon ${name}`}>
                {icon}
              </a>
            );
          })}
        </div>
        {/* social media container ends */}

        {/* toggle-btn container starts  */}
        <div className="toggle-btn-container">
          <button className="toggle-btn" onClick={ShowSideBar}>
            <GoThreeBars />
          </button>
        </div>
        {/* toggle-btn container ends  */}
      </nav>

      {/* sideBar starts */}
      <div className="sidebar" ref={LinksContainerRef}>
        {links.map((item) => {
          const { url, id, text } = item;
          return (
            <a key={id} href={url} className="side-link link" ref={LinksRef}>
              {text}
            </a>
          );
        })}
      </div>
      {/* sideBar starts */}

      <Tours />
    </div>
  );
};

export default NavBar;
