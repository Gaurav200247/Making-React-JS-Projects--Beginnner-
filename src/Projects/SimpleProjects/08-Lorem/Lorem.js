import React, { useState } from "react";
import data from "./data";
const Lorem = () => {
  const [num, setnum] = useState(0);
  const [people, setpeople] = useState(data);
  const [para, setpara] = useState([]);

  const arrayLength = people.length - 1;

  const HandleSubmit = (e) => {
    e.preventDefault();

    const randNum = Math.floor(Math.random() * (arrayLength - 1));
    const rand = people.slice(randNum, randNum + 1);

    const updatedPara = people.slice(0, num);

    if (num <= 0) {
      setpara(rand);
    } else {
      setpara(updatedPara);
    }
  };

  return (
    <div className="container">
      <h1>Tired of Boring Lorem ipsum ?</h1>
      <h3>Try This !!</h3>
      <form onSubmit={HandleSubmit}>
        <label>Paragraphs : </label>
        <input
          className="form-control"
          type="number"
          placeholder="0"
          onChange={(e) => setnum(e.target.value)}
        />

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <div>
        {para.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </div>
    </div>
  );
};

export default Lorem;
