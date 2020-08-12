/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const ShopItem = ({ name, price }) => {
  return (
    <li>
      <a href="#">
        <strong>{name}</strong>
        <span>{price}원</span>
      </a>
    </li>
  );
};

export default ShopItem;
