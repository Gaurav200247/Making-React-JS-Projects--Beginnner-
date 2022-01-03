import React, { useState } from "react";
import SingleColor from "./SIngleColor";
import Values from "values.js";

const ColorGenerator = () => {
  const [color, setColor] = useState("");
  const [isError, setIsError] = useState(false);
  const [list, setList] = useState(new Values("#2D3E98").all(5));

  const HandleSubmit = (e) => {
    e.preventDefault();
    try {
      let getColours = new Values(color).all(5);
      setList(getColours);
    } catch (error) {
      setIsError(true);
    }
  };

  return (
    <div className="container">
      <form onSubmit={HandleSubmit}>
        <label htmlFor="form-input">Color Generator</label>
        <input
          id="form-input"
          className={`form-control ${
            isError ? "input-error" : "input-noerror"
          }`}
          placeholder="#f15025"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <button className="btn btn-primary">Submit</button>
      </form>
      <div className="color-container">
        {list.map((item, index) => {
          return <SingleColor key={index} {...item} index={index} />;
        })}
      </div>
    </div>
  );
};

export default ColorGenerator;
