import React from "react";

const BasketItem = ({ name, price, count }) => {
  return (
    <li>
      <em>{name}</em>
      <span>{price}원</span>
      <span className="num">{count}</span>
      <a href="#">갖다놓기</a>
    </li>
  );
};

export default BasketItem;
