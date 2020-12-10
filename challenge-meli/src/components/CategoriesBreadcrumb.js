import React from "react";

import "./../styles/categoriesBreadcrumb.css";

function CategoriesBreadcrumb({ categories }) {
  return (
    <ul>
      {categories &&
        categories.map((category, index) => {
          return <li key={category + index}>{category}</li>;
        })}
    </ul>
  );
}

export default CategoriesBreadcrumb;
