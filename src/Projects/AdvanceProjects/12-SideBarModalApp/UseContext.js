import React, { useContext, useState } from "react";

const AppContext = React.createContext();
// created AppContext variable of usecontext

//Its a Component
const AppProvider = ({ children }) => {
  const [isModal, setIsModal] = useState(false);
  const [isSideBar, setIsSideBar] = useState(false);

  const OpenModal = () => {
    setIsModal(true);
  };
  const CloseModal = () => {
    setIsModal(false);
  };
  const OpenSidebar = () => {
    setIsSideBar(true);
  };
  const CloseSidebar = () => {
    setIsSideBar(false);
  };

  return (
    //   using provider to send functions
    <AppContext.Provider
      value={{
        OpenModal,
        CloseModal,
        OpenSidebar,
        CloseSidebar,
        isSideBar,
        isModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// custom hook
export const useGlobalContext = () => {
  return useContext(AppContext); //we set Appcontext to GlobalContext so we dont write Appcontext again and again
};

export { AppContext, AppProvider };
