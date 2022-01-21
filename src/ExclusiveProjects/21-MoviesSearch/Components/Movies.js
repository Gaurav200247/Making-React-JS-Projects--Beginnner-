import React from "react";
import { Link } from "react-router-dom";
import { useGlobalVariables } from "../Context";
import Loading from "./Loading";

const defaultImage =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";

const Movies = () => {
  const { SearchedMovies, loading } = useGlobalVariables();

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="all-movies-container">
      {SearchedMovies === null
        ? console.log(null)
        : SearchedMovies.map((item) => {
            const {
              Title: title,
              Year: year,
              imdbID: id,
              Poster: poster,
            } = item;
            return (
              <Link
                to={`/singlemovie/${id}`}
                key={id}
                className="movie-container"
              >
                <div className="poster-container">
                  <img
                    src={poster === "N/A" ? defaultImage : poster}
                    alt={id}
                    className="poster"
                  />
                </div>
                <div className="poster-info">
                  <span className="title">{title}</span>
                  <span className="year">{year}</span>
                </div>
              </Link>
            );
          })}
    </div>
  );
};

export default Movies;
