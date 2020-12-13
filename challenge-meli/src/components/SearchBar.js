import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { useLocation } from "react-router-dom";

import ResponsiveImage from "./ResponsiveImage";

import "./../styles/searchBar.css";

const slugify = require("slugify");

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function SearchBar() {
  const query = useQuery();
  const location = useLocation();
  const history = useHistory();
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    setSearchValue(query?.get("search")?.replaceAll("-", " ") || "");
  }, [location]);

  const handleInputChange = (ev) => {
    setSearchValue(ev.target.value);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    history.push(`/items?search=${slugify(searchValue, { lower: true })}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Nunca dejes de buscar"
        aria-label="Ingresa tu búsqueda"
        value={searchValue}
        onChange={handleInputChange}
        maxLength="120"
        autoCapitalize="none"
        autoComplete="off"
        autoCorrect="off"
        spellCheck="flase"
      />
      <button type="submit" aria-label="Buscar">
        <ResponsiveImage fileDir="icons/ic_Search" altText="" />
      </button>
    </form>
  );
}

export default SearchBar;
