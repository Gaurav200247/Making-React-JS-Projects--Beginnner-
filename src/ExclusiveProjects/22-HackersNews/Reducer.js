import {
  HANDLE_PAGE,
  HANDLE_SEARCH,
  REMOVE_STORIES,
  SET_LOADING,
  SET_STORIES,
} from "./Actions";

export const reducer = (state, action) => {
  switch (action.type) {
    //switch starts
    case SET_LOADING:
      return { ...state, loading: true };
    case SET_STORIES:
      return {
        ...state,
        loading: false,
        hits: action.payload.hits,
        nbPages: action.payload.nbPages,
      };
    case REMOVE_STORIES:
      return {
        ...state,
        hits: state.hits.filter((item) => item.objectID !== action.payload),
      };
    case HANDLE_SEARCH:
      return { ...state, query: action.payload };
    case HANDLE_PAGE:
      if (action.payload === "inc") {
        let nextPage = state.page + 1;
        if (nextPage > state.nbPages - 1) {
          nextPage = 0;
        }
        return { ...state, page: nextPage };
      }
      if (action.payload === "dec") {
        let prepage = state.page - 1;
        if (prepage < 0) {
          prepage = state.nbPages - 1;
        }
        return { ...state, page: prepage };
      }
    //switch ends
  }
  return state;
};
