import React from "react";

function CategoriesBreadcrumb({ categories }) {
  return (
    <ul>
      {categories &&
        categories.map((category) => {
          return <li>{category}</li>;
        })}
    </ul>
  );
}

export default CategoriesBreadcrumb;
