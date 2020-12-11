import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

import ResponsiveImage from "./ResponsiveImage";

import "./../styles/searchBar.css";

const slugify = require("slugify");

function SearchBar() {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const handleInputChange = (ev) => {
    setSearchValue(ev.target.value);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    dispatch({
      type: "SET_SEARCH_VALUE",
      payload: {
        searchValue: searchValue,
      },
    });
    history.push(`/items?search=${slugify(searchValue, { lower: true })}`);
    setSearchValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Nunca dejes de buscar"
        value={searchValue}
        onChange={handleInputChange}
      />
      <button type="submit">
        <ResponsiveImage fileDir="icons/ic_Search" imgAltText="" />
      </button>
    </form>
  );
}

export default SearchBar;
