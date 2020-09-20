import React from "react";
import BasketItem from "./BasketItem";
import styled from "styled-components";
import { inject, observer } from "mobx-react";

const Sum = styled.div`
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px solid #a3a3a3;

  strong {
    font-weight: 600;
  }
`;

const BasketItemList = ({ items, total, onTake }) => {
  const itemList = items.map((item) => (
    <BasketItem
      name={item.name}
      price={item.price}
      count={item.count}
      key={item.name}
      onTake={onTake}
    />
  ));
  return (
    <div>
      {itemList}

      <Sum>
        <strong>총합</strong>: <span>{total}원</span>
      </Sum>
    </div>
  );
};

export default inject(({ market }) => ({
  items: market.selectedItems,
  total: market.total,
  onTake: market.take,
}))(observer(BasketItemList));
