import React, { useState, useEffect } from "react";
import { articles, days, months } from "./data";

const Components = () => {
  const [data, setdata] = useState(articles);

  return (
    <div>
      {data.map((item) => {
        const { id, title, date, length, snippet } = item;

        let tarik = date.getDate();
        let unit = "th";
        if (tarik % 10 === 1) {
          unit = "st";
        }
        if (tarik % 10 === 2) {
          unit = "nd";
        }
        if (tarik % 10 === 3) {
          unit = "rd";
        }

        return (
          <div key={id} className="article">
            <h2 className="title">{title.toUpperCase()}</h2>
            <p className="info">
              <span className="info-date">
                {days[date.getDay()]} {date.getDate()}
                {unit} ,{date.getFullYear()}
              </span>
              <span className="info-length">{length} min read</span>
            </p>
            <p className="snippet">{snippet}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Components;
