import React, { useContext, useState } from "react";
import sublinks from "./data";

const AppContext = React.createContext();

const GlobalAppProvider = ({ children }) => {
  const [IsSideBar, setIsSideBar] = useState(false);
  const [IsSubMenu, setIsSubMenu] = useState(false);
  const [Location, setLocation] = useState({});
  const [Text, setText] = useState({ heading: "", links: [] });

  const OpenSidebar = () => {
    setIsSideBar(true);
  };
  const CloseSidebar = () => {
    setIsSideBar(false);
  };
  const OpenSubMenu = (info, coordinates) => {
    const Link = sublinks.find((item) => item.page === info);
    setText(Link);
    setLocation(coordinates);
    setIsSubMenu(true);
  };
  const CloseSubMenu = () => {
    setIsSubMenu(false);
  };
  return (
    <AppContext.Provider
      value={{
        IsSideBar,
        IsSubMenu,
        OpenSidebar,
        CloseSidebar,
        OpenSubMenu,
        CloseSubMenu,
        Location,
        Text,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { GlobalAppProvider, AppContext };
