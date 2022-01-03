import React from "react";

const Category = ({ categories, filterItems }) => {
  return (
    <div className="btn-container">
      {categories.map((item, index) => {
        return (
          <button
            key={index}
            className="mybtn-toggle"
            onClick={() => filterItems(item)}
          >
            {item.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
};
// mybtn-toggle
export default Category;
