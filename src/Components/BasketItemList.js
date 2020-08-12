import React from "react";
import BasketItem from "./BasketItem";

const BasketItemList = () => {
  return (
    <>
      <BasketItem name="포카칩" price={1500} count={2} />
      <BasketItem name="생수" price={850} count={1} />
    </>
  );
};

export default BasketItemList;
