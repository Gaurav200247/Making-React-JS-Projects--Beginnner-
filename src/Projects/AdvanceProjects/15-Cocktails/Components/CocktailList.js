import React from "react";
import { useGlobalContext } from "../Context";
import Loading from "./Loading";
import Cocktail from "./Cocktail";

const CocktailList = () => {
  const { cocktails, loading } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }
  if (cocktails.length < 1) {
    return <h3 className="no-match">No Cocktails Matched !!</h3>;
  }
  return (
    <div className="cocktails-list-container">
      {cocktails.map((item) => {
        return <Cocktail {...item} key={item.id} />;
      })}
    </div>
  );
};

export default CocktailList;
