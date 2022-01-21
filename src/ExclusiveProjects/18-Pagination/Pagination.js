import React, { useState, useEffect } from "react";
import { useFetch } from "./Fetch";
import Follower from "./Follower";

const Pagination = () => {
  const { loading, data } = useFetch();
  const [page, setpage] = useState(0);
  const [follower, setfollower] = useState([]);

  useEffect(() => {
    if (loading) return;
    setfollower(data[page]);
  }, [loading, page]);

  const next = () => {
    setpage((index) => {
      let newindex = index + 1;
      if (newindex > data.length - 1) {
        newindex = 0;
      }
      return newindex;
    });
  };

  const prev = () => {
    setpage((index) => {
      let newindex = index - 1;
      if (newindex < 0) {
        newindex = data.length - 1;
      }
      return newindex;
    });
  };

  const HandleClick = (index) => {
    setpage(index);
  };

  return (
    <div className="pagination">
      <div className="heading-container">
        <h1 className="heading">{loading ? "Loading..." : "Pagination"}</h1>
        <div className="rect"></div>
      </div>

      <div className="btn-container">
        <button className="btn btn-primary mybtn" onClick={prev}>
          Previous
        </button>
        {data.map((item, index) => {
          return (
            <button
              key={index}
              className={`btn btn-primary mybtn ${
                index == page ? "active-btn" : null
              }`}
              onClick={() => HandleClick(index)}
            >
              {index + 1}
            </button>
          );
        })}
        <button className="btn btn-primary mybtn" onClick={next}>
          Next
        </button>
      </div>

      <div className="page">
        {follower.map((item) => {
          return <Follower key={item.id} {...item} />;
        })}
      </div>

      <div className="btn-container">
        <button className="btn btn-primary mybtn" onClick={prev}>
          Previous
        </button>
        {data.map((item, index) => {
          return (
            <button
              key={index}
              className={`btn btn-primary mybtn ${
                index == page ? "active-btn" : null
              }`}
              onClick={() => HandleClick(index)}
            >
              {index + 1}
            </button>
          );
        })}
        <button className="btn btn-primary mybtn" onClick={next}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
