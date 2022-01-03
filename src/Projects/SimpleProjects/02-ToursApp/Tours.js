import React, { useState, useEffect } from "react";
import Place from "./Place";
const url = "https://course-api.com/react-tours-project";

const Tours = () => {
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const deleteItem = (id) => {
    const newtours = tours.filter((place) => {
      return place.id !== id;
    });
    setTours(newtours);
  };

  const getdata = () => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        setTours(data);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <div className="center">
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="container">
          <h1 className="heading">Our Tours</h1>
          <div className="rect"></div>
          <div className="tour-list">
            {tours.map((place) => {
              return (
                <Place key={place.id} deleteItem={deleteItem} {...place} />
              );
            })}
          </div>
          {tours.length > 0 ? (
            console.log("tours are avaiable")
          ) : (
            <button
              className="btn btn-primary refresh"
              onClick={() => window.location.reload(false)}
            >
              Refresh Page
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Tours;
