import React from "react";
import SearchForm from "../Components/SearchForm";
import Movies from "../Components/Movies";

const Home = () => {
  return (
    <div className="home-page">
      <SearchForm />
      <Movies />
    </div>
  );
};

export default Home;
