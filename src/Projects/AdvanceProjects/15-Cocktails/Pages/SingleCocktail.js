import React from "react";
import { Link, useParams } from "react-router-dom";
import { FcDownRight } from "react-icons/fc";
import Loading from "../Components/Loading";

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
  const { id } = useParams();
  const [loading, setloading] = React.useState(false);
  const [cocktail, setcocktail] = React.useState(null);

  React.useEffect(() => {
    setloading(true);
    const getdata = async () => {
      try {
        const response = await fetch(`${url}${id}`);
        const data = await response.json();

        if (data.drinks) {
          const {
            strAlcoholic: info,
            strDrink: name,
            strDrinkThumb: image,
            strGlass: glass,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = data.drinks[0];

          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ];

          const newCockTail = { info, name, image, glass, ingredients };
          setcocktail(newCockTail);
        } else {
          setcocktail(null);
        }
        setloading(false);
      } catch (error) {
        console.log(error);
        setloading(false);
      }
    };
    getdata();
  }, [id]);

  if (loading) {
    return <Loading />;
  }
  if (!cocktail) {
    return <h1 className="no-match">No CockTail to Display</h1>;
  }

  const { info, name, image, glass, ingredients } = cocktail;

  return (
    <div className="single-cocktail">
      <div className="sc-image-container">
        <Link to="/">
          <button className="btn btn-primary">back to Home</button>
        </Link>
        <img className="sc-image" src={image} alt={name} />
      </div>
      <div className="sc-cocktail-info">
        <div className="level">
          {" "}
          <h2 className="sc-name">
            <span className="title">Name : </span>
            {name}
          </h2>
        </div>

        <div className="level">
          <h3 className="sc-info">
            <span className="title">Info : </span>
            {info}
          </h3>
        </div>

        <div className="level">
          <h5 className="sc-glass">
            <span className="title">Glass : </span>
            {glass}
          </h5>
        </div>

        <ul className="sc-all-ingredients">
          <h5>Ingredients</h5>
          {ingredients.map((item, index) => {
            return item ? (
              <li key={index} className="ingredients">
                <FcDownRight /> {item}
              </li>
            ) : null;
          })}
        </ul>
      </div>
    </div>
  );
};

export default SingleCocktail;
