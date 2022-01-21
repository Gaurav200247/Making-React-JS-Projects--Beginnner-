import React from "react";
import { useGlobalVariables } from "../Context";

const SearchForm = () => {
  const { searchTerm, setSearchTerm, isError } = useGlobalVariables();

  return (
    <div className="form-container">
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          className="form-control"
          placeholder="Search Movies Here..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>
      {isError.show && <div className="error-alert">{isError.msg}</div>}
    </div>
  );
};

export default SearchForm;
