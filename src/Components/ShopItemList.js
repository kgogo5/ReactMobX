import React from "react";
import ShopItem from "./ShopItem";

const items = [
  {
    name: "생수",
    price: 850,
  },
  {
    name: "신라면",
    price: 900,
  },
  {
    name: "포카칩",
    price: 1500,
  },
  {
    name: "새우깡",
    price: 1000,
  },
];

const ShopItemList = () => {
  return items.map((item) => <ShopItem {...item} key={item.name} />);
};

export default ShopItemList;
