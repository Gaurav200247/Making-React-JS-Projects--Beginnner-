import React, { useState, useEffect } from "react";
import { FcAdvance } from "react-icons/fc";

const url = "https://course-api.com/react-tabs-project";

const Tabs = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [index, setIndex] = useState(0);

  const getdata = () => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getdata();
  }, []);

  const switchItem = (currentIndex) => {
    setIndex(currentIndex);
  };

  return (
    <div className="container">
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <h1 className="heading">Experience</h1>
          <div className="rect"></div>

          <div className="main-container">
            {/* BUTTON CONTAINER */}
            <div className="left-container">
              {data.map((item, index) => {
                return (
                  <button
                    key={index}
                    className="tab-btn"
                    onClick={() => switchItem(index)}
                  >
                    {item.company}
                  </button>
                );
              })}
            </div>
            {/* BUTTON CONTAINER Ends */}
            {/* INFO */}
            <div className="right-container">
              <h1 className="title">{data[index].title}</h1>
              <h3 className="company">{data[index].company}</h3>
              <span className="dates">{data[index].dates}</span>
              {data[index].duties.map((item, index) => {
                return (
                  <div key={index} className="info">
                    <FcAdvance className="icon" />
                    <p className="duties">{item}</p>
                  </div>
                );
              })}
              <div className="more-info-btn-container">
                <button className="more-info-btn btn btn-primary">
                  more info
                </button>
              </div>
            </div>
            {/* INFO Ends */}
          </div>
        </>
      )}
    </div>
  );
};

export default Tabs;
