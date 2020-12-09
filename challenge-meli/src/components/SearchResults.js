import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import API from "./../api";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function SearchResults() {
  const query = useQuery();
  const searchValue = useSelector(
    (state) => state.searchValue || query.get("search").replace("-", " ")
  );

  useEffect(() => {
    console.log("search", searchValue);
    API.get(`items?q=${searchValue}&limit=2`).then((res) => {
      console.log(res);
    });
  }, [searchValue]);

  return <div>Search results</div>;
}

export default SearchResults;
