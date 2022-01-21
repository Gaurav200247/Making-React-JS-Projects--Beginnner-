import React from "react";
import { Link, useParams } from "react-router-dom";
import { useFetch } from "../useFetch";
import Loading from "../Components/Loading";

const SingleMovie = () => {
  const { id } = useParams();
  const { loading, data: movie, isError } = useFetch(`&i=${id}`);

  console.log(movie);

  if (loading) {
    return <Loading />;
  }
  if (isError.show) {
    <div className="error-page">
      <h3>Error || {isError.msg} </h3>
      <Link to="/">
        <button className="btn btn-primary back-btn">Back to Home</button>
      </Link>
    </div>;
  }
  // const { Poster, Title, Genre, Rated, Release, Actors, Plot, imdbRating } =
  //   movie;
  return movie ? (
    <div className="single-movie-page">
      <div className="image-side">
        <img src={movie.Poster} alt={movie.Title} className="image" />
      </div>
      <div className="details-side">
        <h3 className="movie-title detail">{movie.Title}</h3>
        <span className="movie--genre detail">Genre : {movie.Genre}</span>
        <span className="movie--rated detail">Rated : {movie.Rated}</span>
        <span className="movie-year detail">
          Released On : {movie.Released}
        </span>
        <span className="movie-cast detail">Cast : {movie.Actors}</span>
        <p className="movie-plot detail">Plot : {movie.Plot}</p>
        <span className="movie-rating detail">
          imdb Rating : {movie.imdbRating}/10
        </span>
        <Link to="/">
          <button className="btn btn-primary back-btn">Go Back</button>
        </Link>
      </div>
    </div>
  ) : (
    <div className="error-page">
      <h3>Error || {isError.msg} </h3>
      <Link to="/">
        <button className="btn btn-primary back-btn">Back to Home</button>
      </Link>
    </div>
  );
};

export default SingleMovie;
