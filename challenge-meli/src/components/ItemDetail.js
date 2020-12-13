import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import API from "./../api";
import Wrapper from "./Wrapper";
import Loading from "./Loading";
import CategoriesBreadcrumb from "./CategoriesBreadcrumb";
import ItemPrice from "./ItemPrice";
import ActionButton from "./ActionButton";

import "./../styles/itemDetail.css";

function ItemDetail() {
  const { id } = useParams();
  const [componentLoading, setComponentLoading] = useState(true);
  const [componentError, setComponentError] = useState(false);
  const [itemInfo, setItemInfo] = useState([]);
  const [itemCategory, setItemCategory] = useState([]);

  useEffect(() => {
    API.get(`items/${id}`)
      .then((res) => {
        if (res.status == 200) {
          setItemCategory(res.data.categories);
          setItemInfo(res.data.item);
        }
      })
      .catch((err) => {
        console.log(err.response.data);
        setComponentError(true);
      })
      .finally(() => {
        setComponentLoading(false);
      });
  }, []);

  return (
    <Wrapper myClass="page-wrapper">
      {!componentError && <CategoriesBreadcrumb categories={itemCategory} />}
      {componentLoading && <Loading />}
      {!componentLoading && !componentError && (
        <div className="item-grid">
          <div className="item-grid__info">
            <figure className="item-image">
              <img src={itemInfo.picture} alt={itemInfo.title} />
            </figure>
            <div>
              <p className="item-condition">
                <span className="text-capitalize">{itemInfo.condition}</span> -{" "}
                {itemInfo.sold_quantity} vendidios
              </p>
              <h1 className="item-title">{itemInfo.title}</h1>
              <p className="item-price">
                <span>{itemInfo.price.symbol}</span>
                <ItemPrice priceInfo={itemInfo.price} showDecimals={true} />
              </p>
              <ActionButton label="Comprar" variant="primary" />
            </div>
          </div>
          {itemInfo.description && (
            <div className="item-grid__description">
              <h2>Descripción del producto</h2>
              <p>{itemInfo.description}</p>
            </div>
          )}
        </div>
      )}
    </Wrapper>
  );
}

export default ItemDetail;
