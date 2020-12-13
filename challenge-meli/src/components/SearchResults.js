import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import API from "./../api";
import Wrapper from "./Wrapper";
import Loading from "./Loading";
import CategoriesBreadcrumb from "./CategoriesBreadcrumb";
import SearchResultsItem from "./SearchResultsItem";
import ErrorMessage from "./ErrorMessage";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function SearchResults() {
  const query = useQuery();
  const searchValue = query?.get("search");
  const [componentLoading, setComponentLoading] = useState(true);
  const [componentError, setComponentError] = useState(false);
  const [searchItems, setSearchItems] = useState([]);
  const [searchCategories, setSearchCategories] = useState([]);

  useEffect(() => {
    setComponentLoading(true);
    setComponentError(false);
    setSearchCategories([]);
    setSearchItems([]);

    API.get(`items`, {
      params: {
        q: searchValue,
        limit: 4,
      },
    })
      .then((res) => {
        if (res.status === 200) {
          if (res.data.items.length === 0) {
            setComponentError(true);
          } else {
            setSearchCategories(res.data.categories);
            setSearchItems(res.data.items);
          }
        }
      })
      .catch((err) => {
        console.log(err.response.data);
        setComponentError(true);
      })
      .finally(() => {
        setComponentLoading(false);
      });
  }, [searchValue]);

  return (
    <Wrapper myClass="page-wrapper">
      {componentError && (
        <ErrorMessage title="No hubo resultados de busqueda" />
      )}
      {!componentError && (
        <CategoriesBreadcrumb categories={searchCategories} />
      )}
      {componentLoading && <Loading />}
      {!componentLoading &&
        !componentError &&
        searchItems.map((item) => {
          return <SearchResultsItem key={item.id} item={item} />;
        })}
    </Wrapper>
  );
}

export default SearchResults;
