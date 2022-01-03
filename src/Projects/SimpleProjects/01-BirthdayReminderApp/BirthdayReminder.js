import React, { useState } from "react";
import SinglePerson from "./SinglePerson";
import data from "./data";

const BirthdayReminder = () => {
  const [people, setpeople] = useState(data);

  const clearallitems = () => {
    setpeople([]);
  };
  return (
    <div className="container">
      <h1 className="heading">Birthday Reminder</h1>
      <div className="rect"></div>
      <h2 className="sub-heading">{people.length} Birthdays Today</h2>
      <div className="sub-container">
        {" "}
        {people.map((person) => {
          return <SinglePerson key={person.id} {...person} />;
        })}
        <button className="btn btn-danger" onClick={clearallitems}>
          Clear All Items
        </button>
      </div>
    </div>
  );
};

export default BirthdayReminder;
