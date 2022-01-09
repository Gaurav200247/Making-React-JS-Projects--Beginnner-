import React, { useContext, useEffect, useState, useCallback } from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setloading] = useState(true);
  const [searchterm, setsearchterm] = useState("a");
  const [cocktails, setcocktails] = useState([]);

  const fetchDrinks = useCallback(async () => {
    setloading(true);
    try {
      const response = await fetch(`${url}${searchterm}`);
      const data = await response.json();

      const { drinks } = data;

      if (drinks) {
        const newdrinks = drinks.map((item) => {
          const { idDrink, strAlcoholic, strGlass, strDrinkThumb, strDrink } =
            item;
          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            glass: strGlass,
            info: strAlcoholic,
          };
        });
        setcocktails(newdrinks);
      } else {
        setcocktails([]);
      }
      setloading(false);
    } catch (error) {
      console.log(error);
    }
  }, [searchterm]);
  useEffect(() => {
    fetchDrinks();
  }, [searchterm, fetchDrinks]);

  return (
    <AppContext.Provider
      value={{ loading, searchterm, cocktails, setsearchterm }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
