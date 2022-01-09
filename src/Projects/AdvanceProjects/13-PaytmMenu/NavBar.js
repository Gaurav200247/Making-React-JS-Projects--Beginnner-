import React from "react";
import sublinks from "./data";
import { FaBars } from "react-icons/fa";
import logo from "../../../styles/Images/PaytmLogo.png";
import { useGlobalContext } from "./Context";

const NavBar = () => {
  const { OpenSidebar, OpenSubMenu, CloseSubMenu } = useGlobalContext();

  const DisplaySubMenu = (e) => {
    const linkText = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const CenterOfBtn = (tempBtn.left + tempBtn.right) / 2 - 100;
    const bottomOfBtn = tempBtn.bottom - 10;
    // console.log(linkText);
    OpenSubMenu(linkText, { CenterOfBtn, bottomOfBtn });
  };

  const HandleClose = (e) => {
    if (!e.target.classList.contains("link")) {
      CloseSubMenu();
    }
  };

  return (
    <nav onMouseOver={HandleClose}>
      {/* logo-containerstarts */}
      <div className="logo-container">
        <img className="logo" src={logo} alt="logo" />
      </div>
      {/* logo-container ends */}

      {/* links-container starts */}
      <div className="links-container">
        {sublinks.map((item, index) => {
          return (
            <a
              key={index}
              href="#"
              className="link"
              onMouseOver={DisplaySubMenu}
            >
              {item.page}
            </a>
          );
        })}
      </div>
      {/* links-container ends */}

      {/* sign in btn container starts */}
      <div className="sign-in-btn-container">
        <button className="btn btn-primary sign-in-btn">Sign In</button>
      </div>
      {/* sign in btn container ends */}

      {/* toggle-btn container starts */}
      <div className="toggle-btn-container">
        <button className="btn toggle-btn" onClick={OpenSidebar}>
          <FaBars />
        </button>
      </div>
      {/* toggle-btn container ends */}
    </nav>
  );
};

export default NavBar;
