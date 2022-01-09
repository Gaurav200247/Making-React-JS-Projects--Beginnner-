import React, { useRef, useEffect } from "react";
import { useGlobalContext } from "./Context";

const SubMenu = () => {
  const {
    IsSubMenu,
    Location,
    Text: { page, links },
  } = useGlobalContext();

  const Container = useRef(null);

  useEffect(() => {
    const submenu = Container.current;
    const { CenterOfBtn, bottomOfBtn } = Location;
    submenu.style.left = `${CenterOfBtn}px `;
    submenu.style.top = `${bottomOfBtn}px`;
  }, [Location]);

  return (
    <div
      ref={Container}
      className={`${IsSubMenu ? "submenu show" : "submenu"}`}
    >
      <span className="submenu-heading">{page}</span>
      <div className="submenu-sublinks-container">
        {links.map((item, index) => {
          const { label, icon, url } = item;
          return (
            <a href={url} className="submenu-sublinks" key={index}>
              {icon} {label.toUpperCase()}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default SubMenu;
