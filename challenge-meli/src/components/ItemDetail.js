import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import API from "./../api";
import Wrapper from "./Wrapper";
import Loading from "./Loading";

function ItemDetail() {
  const { id } = useParams();
  const [itemLoading, setItemLoading] = useState(true);
  const [itemError, setItemError] = useState(false);
  const [itemInfo, setItemInfo] = useState([]);
  const [itemCategory, setItemCategory] = useState([]);

  useEffect(() => {
    console.log("search item id", id);
    API.get(`items/${id}`)
      .then((res) => {
        console.log(res);
        if (res.status == 200) {
          setItemCategory(res.data.categories);
          setItemInfo(res.data.item);
          setItemLoading(false);
        }
      })
      .catch((err) => {
        console.log(err.response);
        setItemError(true);
      });
  }, []);

  return (
    <Wrapper myClass="page-wrapper">
      {itemLoading && <Loading />}
      {!itemLoading && <h1>{itemInfo.title}</h1>}
    </Wrapper>
  );
}

export default ItemDetail;
