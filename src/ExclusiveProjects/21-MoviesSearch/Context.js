import React, { useContext, useState } from "react";
import { useFetch } from "./useFetch";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("superman");

  const {
    loading,
    data: SearchedMovies,
    isError,
  } = useFetch(`&s=${searchTerm}`);

  // console.log(isError.msg);

  return (
    <AppContext.Provider
      value={{ SearchedMovies, searchTerm, setSearchTerm, loading, isError }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalVariables = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
