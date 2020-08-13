/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const ShopItem = ({ name, price, onPut }) => {
  return (
    <li>
      <a href="#" onClick={() => onPut(name, price)}>
        <strong>{name}</strong>
        <span>{price}원</span>
      </a>
    </li>
  );
};

export default ShopItem;
