import React, { useState } from "react";
import Category from "./Category";
import menu from "./data";
import SingleItem from "./SingleItem";

const allCategories = ["all", ...new Set(menu.map((item) => item.category))];
console.log(allCategories);

const Menu = () => {
  const [items, setItems] = useState(menu);
  const [categories, setcategories] = useState(allCategories);

  const filterItems = (str) => {
    if (str === "all") {
      setItems(menu);
    } else {
      const newItems = items.filter((item) => item.category === str);
      setItems(newItems);
    }
  };

  return (
    <div className="container">
      <h1 className="heading">Our Menu</h1>
      <div className="rect-short"></div>

      <Category categories={categories} filterItems={filterItems} />

      <div className="menu-container">
        {items.map((item) => {
          return <SingleItem key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
};

export default Menu;
