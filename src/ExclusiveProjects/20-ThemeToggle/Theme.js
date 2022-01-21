import React, { useEffect, useState } from "react";
import Components from "./Components";

const getLocalTheme = () => {
  let theme = "light-theme";
  if (localStorage.getItem("theme-container")) {
    theme = localStorage.setItem("theme-container");
  }
  return theme;
};

const Theme = () => {
  const [theme, settheme] = useState(getLocalTheme);

  const ToggleTheme = () => {
    if (theme === "light-theme") {
      settheme("dark-theme");
    } else {
      settheme("light-theme");
    }
  };

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme-container", theme);
  }, [theme]);

  return (
    <div className={`container ${theme}`}>
      <div className="head-container">
        <h1>Dark Mode App</h1>
        <button className="btn btn-dark" onClick={ToggleTheme}>
          Toggle
        </button>
      </div>
      <Components />
    </div>
  );
};

export default Theme;
