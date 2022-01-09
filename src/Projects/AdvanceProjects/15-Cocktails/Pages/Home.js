import React from "react";
import SearchForm from "../Components/SearchForm";
import CocktailList from "../Components/CocktailList";

const Home = () => {
  return (
    <div>
      <SearchForm />
      <CocktailList />
    </div>
  );
};

export default Home;
