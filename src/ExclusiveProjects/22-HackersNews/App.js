import React from "react";

import SearchForm from "./SearchForm";
import Buttons from "./Buttons";
import Stories from "./Stories";

import { useGlobalState } from "./Context";

const App = () => {
  const { loading } = useGlobalState();
  return (
    <div>
      <div className="heading-container">
        <h1
          className="heading"
          style={{ cursor: "pointer" }}
          onClick={() => window.location.reload()}
        >
          Hacker News App
        </h1>
        <div className="rect"></div>
      </div>
      <SearchForm />
      <Buttons />
      {loading ? <div className="loading"></div> : <Stories />}
    </div>
  );
};

export default App;
