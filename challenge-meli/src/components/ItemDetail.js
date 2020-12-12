import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import numberFormatter from "number-formatter";

import API from "./../api";
import Wrapper from "./Wrapper";
import Loading from "./Loading";
import CategoriesBreadcrumb from "./CategoriesBreadcrumb";

import "./../styles/itemDetail.css";

function ItemDetail() {
  const { id } = useParams();
  const [itemLoading, setItemLoading] = useState(true);
  const [itemError, setItemError] = useState(false);
  const [itemInfo, setItemInfo] = useState([]);
  const [itemCategory, setItemCategory] = useState([]);

  useEffect(() => {
    API.get(`items/${id}`)
      .then((res) => {
        console.log(res);
        if (res.status == 200) {
          setItemCategory(res.data.categories);
          setItemInfo(res.data.item);
          setItemLoading(false);
          console.log(itemInfo.description);
        }
      })
      .catch((err) => {
        console.log(err.response);
        setItemError(true);
      });
  }, []);

  return (
    <Wrapper myClass="page-wrapper">
      <CategoriesBreadcrumb categories={itemCategory} />
      {itemLoading && <Loading />}
      {!itemLoading && itemInfo && (
        <div className="item-grid">
          <div className="item-grid__info">
            <div className="item-image">
              <img src={itemInfo.picture} alt={itemInfo.title} />
            </div>
            <div>
              <p className="item-condition">
                <span className="text-capitalize">{itemInfo.condition}</span> -{" "}
                {itemInfo.sold_quantity} vendidios
              </p>
              <h1 className="item-title">{itemInfo.title}</h1>
              <p className="item-price">
                <span>{itemInfo.price.symbol}</span>
                {numberFormatter("#.##0,#", itemInfo.price.amount)}
                <span className="price-decimal"></span>
              </p>
            </div>
          </div>
          <div className="item-grid__description">
            <h2>Descripción del producto</h2>
            <p>{itemInfo.description}</p>
          </div>
        </div>
      )}
    </Wrapper>
  );
}

export default ItemDetail;
