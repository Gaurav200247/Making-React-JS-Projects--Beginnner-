import React from "react";
import { useGlobalContext } from "../Context";

const SearchForm = () => {
  const { setsearchterm } = useGlobalContext();
  const searchValue = React.useRef("");

  const searchCocktail = () => {
    setsearchterm(searchValue.current.value);
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
  };

  React.useEffect(() => {
    //to focus on input tag on first render to make app more appealing
    searchValue.current.focus();
  }, []);

  return (
    <div>
      <form onSubmit={HandleSubmit}>
        <label htmlFor="inp">search your favorite cocktail :</label>
        <input
          id="inp"
          className="form-control"
          placeholder="enter here"
          type="text"
          ref={searchValue}
          onChange={searchCocktail}
        />
      </form>
    </div>
  );
};

export default SearchForm;
