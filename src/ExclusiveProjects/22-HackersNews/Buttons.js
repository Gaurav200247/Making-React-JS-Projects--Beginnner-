import React from "react";
import { useGlobalState } from "./Context";

const Buttons = () => {
  const { loading, HandlePage, page, nbPages } = useGlobalState();

  return (
    <div className="btns-container">
      <button
        disabled={loading}
        className="btn btn-primary my-btns"
        onClick={() => HandlePage("dec")}
      >
        PREV
      </button>
      {/* indicator starts */}
      <h3 className="page-indicator">
        {page + 1} of {nbPages}
      </h3>
      {/* indicator ends */}
      <button
        disabled={loading}
        className="btn btn-primary my-btns"
        onClick={() => HandlePage("inc")}
      >
        NEXT
      </button>
    </div>
  );
};

export default Buttons;
