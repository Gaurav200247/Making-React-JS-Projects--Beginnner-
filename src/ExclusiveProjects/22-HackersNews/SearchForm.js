import React from "react";
import { useGlobalState } from "./Context";

const SearchForm = () => {
  const { query, HandleSearch } = useGlobalState();

  return (
    <div>
      <form>
        <input
          className="form-control"
          placeholder="Seach Hacker News Here..."
          value={query}
          onChange={(e) => HandleSearch(e.target.value)}
        />
      </form>
    </div>
  );
};

export default SearchForm;
