import React, { useEffect, useContext, useReducer } from "react";
import { reducer } from "./Reducer";
import {
  SET_LOADING,
  SET_STORIES,
  HANDLE_PAGE,
  HANDLE_SEARCH,
  REMOVE_STORIES,
} from "./Actions";

const mainurl = "https://hn.algolia.com/api/v1/search?";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const initialState = {
    loading: false,
    page: 0,
    nbPages: 0,
    hits: [],
    query: "",
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = async (url) => {
    dispatch({ type: SET_LOADING });
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      // SET_STORIES
      dispatch({
        type: SET_STORIES,
        payload: { hits: data.hits, nbPages: data.nbPages },
      });
    } catch (error) {
      console.log(error);
    }
  };
  //   HANDLE_SEARCH
  const HandleSearch = (SearchTerm) => {
    dispatch({ type: HANDLE_SEARCH, payload: SearchTerm });
  };
  //   REMOVE_STORIES
  const RemoveStories = (id) => {
    dispatch({ type: REMOVE_STORIES, payload: id });
    console.log("deleted");
  };
  //   HANDLE_PAGE
  const HandlePage = (value) => {
    dispatch({ type: HANDLE_PAGE, payload: value });
  };

  useEffect(() => {
    fetchData(`${mainurl}&query=${state.query}&page=${state.page}`);
  }, [state.query, state.page]);

  return (
    <AppContext.Provider
      value={{ ...state, HandlePage, HandleSearch, RemoveStories }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalState = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
