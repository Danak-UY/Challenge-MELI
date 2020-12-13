import React from "react";
import numberFormatter from "number-formatter";
import { getIntegerNumber, getDecimalNumber } from "./../utils";

import "./../styles/itemPrice.css";

function ItemPrice({ priceInfo, showDecimals }) {
  const price = parseFloat(priceInfo.amount);
  const priceRounded = getIntegerNumber(price);
  const priceDecimals = getDecimalNumber(price, parseInt(priceInfo.decimal));

  return (
    <span>
      {numberFormatter("#.##0,#", priceRounded)}
      {(showDecimals || priceDecimals > 0) && (
        <span className="price-decimals">
          {priceDecimals.toString().slice(2)}
        </span>
      )}
    </span>
  );
}

export default ItemPrice;
