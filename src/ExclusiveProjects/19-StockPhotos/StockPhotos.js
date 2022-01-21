import React, { useEffect, useState, useRef } from "react";
import { FcSearch } from "react-icons/fc";
import SinglePhoto from "./SinglePhoto";

// urls
const clientID = "?client_id=bjwhxWU2zMgd9PHqa_jOlBI20ExAPDU-2tKjwh3wzIA";
const mainurl = "https://api.unsplash.com/photos/";
const searchUrl = `https://api.unsplash.com/search/photos/`;

// Component
const StockPhotos = () => {
  // all usestates
  // query is the searching item
  const [loading, setloading] = useState(false);
  const [page, setpage] = useState(1);
  const [query, setquery] = useState("");
  const [photos, setphotos] = useState([]);
  const [newImages, setnewImages] = useState(false);

  const mounted = useRef(false);

  // Fetching data function
  const FetchData = async () => {
    setloading(true);

    const urlPage = `&page=${page}`;
    const urlQuery = `&query=${query}`;

    let url;
    if (query) {
      url = `${searchUrl}${clientID}${urlPage}${urlQuery}`;
    } else {
      url = `${mainurl}${clientID}${urlPage}`;
    }

    try {
      console.log(url);
      const resp = await fetch(url);
      const data = await resp.json();

      setphotos((alreadyRenderedPhotos) => {
        if (query && page === 1) {
          //if page is 1 and u searched something
          return data.results;
        } else if (query) {
          //if u search but page is not 1
          return [...alreadyRenderedPhotos, ...data.results];
        } else {
          return [...alreadyRenderedPhotos, ...data];
        }
      });
      setnewImages(false);
      setloading(false);
    } catch (error) {
      console.log(error);
      setnewImages(false);
      setloading(false);
    }
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    if (!query) return;
    if (page === 1) {
      FetchData();
    }
    setpage(1);
  };

  const event = () => {
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 2) {
      setnewImages(true);
    }
  };

  // all useeffects
  // useeffect for fetching data
  useEffect(() => {
    FetchData();
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", event);
    return () => {
      window.removeEventListener("scroll", event);
    };
  }, []);

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    if (!newImages) return;
    if (loading) return;
    setpage((oldpage) => oldpage + 1);
  }, [newImages]);

  return (
    <div>
      {/* heading */}
      <div className="heading">
        <h1
          onClick={() => window.location.reload()}
          style={{ cursor: "pointer" }}
        >
          PHOTOS SEARCH APP
        </h1>
        <div className="rect"></div>
      </div>
      {/* heading ends */}

      {/* form */}
      <form onSubmit={HandleSubmit}>
        <input
          className="form-control"
          placeholder="Search"
          value={query}
          onChange={(e) => setquery(e.target.value)}
        />
        <button type="submit" className="submit-btn">
          <FcSearch />
        </button>
      </form>
      {/* form ends */}

      {/* all photos */}
      <div className="all-photos-display">
        {photos.map((item, index) => {
          return <SinglePhoto key={index} {...item} />;
        })}
      </div>
      {/* all photos ends */}

      {/* loading */}
      {loading && <h1 className="loading">Loading...</h1>}
      {/* loading ends */}
    </div>
  );
};

export default StockPhotos;
