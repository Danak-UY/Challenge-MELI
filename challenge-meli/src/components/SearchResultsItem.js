import React from "react";
import { Link } from "react-router-dom";
import numberFormatter from "number-formatter";

import ResponsiveImage from "./ResponsiveImage";

import "./../styles/searchResultsItem.css";

function SearchResultsItem({ item }) {
  return (
    <article>
      <Link to={`/items/${item.id}`} className="item-image">
        <img src={item.picture} alt={item.title} />
      </Link>
      <div className="item-info">
        <Link to={`/items/${item.id}`} className="item-title">
          <h1>{item.title}</h1>
        </Link>
        <p className="item-price">
          <span>{item.price.symbol}</span>
          {numberFormatter("#.##0,#", item.price.amount)}
          {item.free_shipping && (
            <ResponsiveImage
              fileDir="icons/ic_Shipping"
              altText="Con Envio Gratis"
            />
          )}
        </p>
      </div>
      <div className="item-city">
        <p className="city">{item.address.city_name}</p>
        <p className="state">{item.address.state_name}</p>
      </div>
    </article>
  );
}

export default SearchResultsItem;
