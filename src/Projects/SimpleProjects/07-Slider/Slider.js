import React, { useState, useEffect } from "react";
import data from "./data";
import { FaRedhat } from "react-icons/fa";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

const Slider = () => {
  const [people, setpeople] = useState(data);
  const [index, setindex] = useState(0);

  useEffect(() => {
    let lastIndex = people.length - 1;
    if (index < 0) {
      setindex(lastIndex);
    }
    if (index > lastIndex) {
      setindex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let sliderInterval = setInterval(() => {
      setindex(index + 1);
    }, 3000);
    return () => {
      clearInterval(sliderInterval);
    };
  }, [index]);

  return (
    <div>
      <h1 className="heading">
        <span className="slash">/</span>Reviews
      </h1>
      <div className="container">
        <div className="section-center">
          {people.map((item, personIndex) => {
            const { name, position, image, info, id } = item;
            let elementPosition = "next-slide";
            if (personIndex === index) {
              elementPosition = "active-slide";
            }
            if (
              personIndex === index - 1 ||
              (index === 0 && personIndex === people.length - 1)
            ) {
              elementPosition = "prev-slide";
            }
            return (
              <article key={id} className={elementPosition}>
                <div className="icon-container">
                  <FaRedhat className="hat-icon" />
                </div>
                <img className="img" src={image} alt={name} />
                <span className="name">{name.toUpperCase()}</span>
                <span className="position">"{position}"</span>
                <p className="info">{info}</p>
              </article>
            );
          })}

          <button className="prev-btn" onClick={() => setindex(index - 1)}>
            <AiOutlineLeft />
          </button>
          <button className="next-btn" onClick={() => setindex(index + 1)}>
            <AiOutlineRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
