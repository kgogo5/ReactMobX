import React from "react";
import styled from "styled-components";

const ProductsBox = styled.div`
  margin: 50px;
  display: flex;
  border: 1px solid black;

  > div {
    width: 50%;
  }

  h2 {
    margin-bottom: 10px;
    font-family: "NanumBarunGothic", sans-serif;
    font-size: 20px;
    font-weight: 600;
  }
`;

const Products = styled.div`
  padding: 15px;
  display: flex-box;
  background-color: #f6f6f6;
  font-size: 14px;

  li {
    border: 1px solid black;

    &:hover {
      background-color: #cecece;
    }

    > a {
      display: block;
      text-decoration: none;
      color: #000;

      > * {
        margin: 5px;
      }
    }

    strong {
      display: block;
      font-weight: 600;
    }

    span {
      display: block;
    }
  }

  li + li {
    margin-top: 10px;
  }
`;

const Basket = styled.div`
  padding: 15px;
  width: 100%;
  font-size: 14px;

  li {
    display: flex;
    position: relative;
    padding: 5px 75px 5px 5px;
  }

  em {
    flex: 8;
  }

  span {
    flex: 5;
  }

  .num {
    flex: 1;
  }

  a {
    position: absolute;
    right: 5px;
    top: 50%;
    margin-top: -7px;
    color: red;
    text-decoration: unset;
    font-size: 14px;
  }

  li:hover {
    background-color: #ededed;
  }
`;

const Sum = styled.div`
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px solid #a3a3a3;

  strong {
    font-weight: 600;
  }
`;

const SuperMarketTemplate = ({ items, basket }) => {
  return (
    <ProductsBox>
      <Products>
        <h2>상품</h2>
        <ul>{items}</ul>
      </Products>
      <Basket>
        <h2>장바구니</h2>
        <div>
          <ul>{basket}</ul>
          <Sum>
            <strong>총합</strong>: <span>3850원</span>
          </Sum>
        </div>
      </Basket>
    </ProductsBox>
  );
};

export default SuperMarketTemplate;
