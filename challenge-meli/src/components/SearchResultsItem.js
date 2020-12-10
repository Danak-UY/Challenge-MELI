import React from "react";
import { Link } from "react-router-dom";

function SearchResultsItem({ item }) {
  return (
    <div>
      <Link to={`/items/${item.id}`}>
        <h1>{item.title}</h1>
      </Link>
    </div>
  );
}

export default SearchResultsItem;
