import React, { useContext, useReducer, useEffect } from "react";
import data from "./data";
import reducerFunction from "./Reducer";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const initialState = {
    cart: data,
    total: 0,
    amount: 0,
  };
  const [state, dispatch] = useReducer(reducerFunction, initialState);

  const ClearCart = () => {
    dispatch({ type: "CLEAR_CART" });
    console.log("cart cleared");
  };

  const DeleteItem = (id) => {
    dispatch({ type: "DELETE_ITEM", payload: id });
    console.log("item deleted\t" + id);
  };

  const increase = (id) => {
    dispatch({ type: "INCREASE", payload: id });
  };

  const decrease = (id) => {
    dispatch({ type: "DECREASE", payload: id });
  };

  useEffect(() => {
    dispatch({ type: "GET_TOTALS" });
  }, [state.cart]);

  return (
    <AppContext.Provider
      value={{ ...state, ClearCart, DeleteItem, increase, decrease }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
