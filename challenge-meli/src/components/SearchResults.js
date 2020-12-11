import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import API from "./../api";
import Wrapper from "./Wrapper";
import Loading from "./Loading";
import CategoriesBreadcrumb from "./CategoriesBreadcrumb";
import SearchResultsItem from "./SearchResultsItem";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function SearchResults() {
  const query = useQuery();
  const searchValue = query.get("search").replace("-", "+");
  const [itemsLoading, setItemsLoading] = useState(true);
  const [itemsError, setItemsError] = useState(false);
  const [searchItems, setSearchItems] = useState([]);
  const [searchCategories, setSearchCategories] = useState([]);

  useEffect(() => {
    setItemsLoading(true);
    setItemsError(false);
    API.get(`items`, {
      params: {
        q: searchValue,
        limit: 4,
      },
    })
      .then((res) => {
        console.log(res);
        if (res.status == 200) {
          setSearchCategories(res.data.categories);
          setSearchItems(res.data.items);
          setItemsLoading(false);
        }
      })
      .catch((err) => {
        console.log(err.response);
        setItemsError(true);
      });
  }, [searchValue]);

  return (
    <Wrapper myClass="page-wrapper">
      <CategoriesBreadcrumb categories={searchCategories} />
      {itemsLoading && <Loading />}
      {!itemsLoading &&
        searchItems.map((item) => {
          return <SearchResultsItem key={item.id} item={item} />;
        })}
    </Wrapper>
  );
}

export default SearchResults;
