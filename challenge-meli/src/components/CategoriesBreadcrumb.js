import React from "react";
import Skeleton from "react-loading-skeleton";

import BreadcrumbLoading from "./BreadcrumbLoading";

import "./../styles/categoriesBreadcrumb.css";

function CategoriesBreadcrumb({ categories }) {
  return (
    <ul>
      {categories?.length > 0 ? (
        categories.map((category, index) => {
          return <li key={category + index}>{category}</li>;
        })
      ) : (
        <BreadcrumbLoading />
      )}
    </ul>
  );
}

export default CategoriesBreadcrumb;
