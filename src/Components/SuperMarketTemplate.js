import React from "react";
import SuperMarket from "./SuperMarket";
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
  display: flex-box;
  font-size: 14px;

  li {
    position: relative;
    padding: 5px 75px 5px 5px;
  }

  em {
    display: inline-block;
    min-width: 60%;
  }

  span {
    display: inline-block;
    width: 30%;
  }

  .num {
    width: 10%;
    text-align: right;
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
  padding-top: 10px;
  border-top: 1px solid #a3a3a3;

  strong {
    font-weight: 600;
  }
`;

const SuperMarketTemplate = ({ items }) => {
  return (
    <ProductsBox>
      <Products>
        <h2>상품</h2>
        <ul>{items}</ul>
      </Products>
      <Basket>
        <h2>장바구니</h2>
        <div>
          <ul>
            <li>
              <em>포카칩</em>
              <span>1500원</span>
              <span className="num">2</span>
              <a href="#">갖다놓기</a>
            </li>
            <li>
              <em>포카칩</em>
              <span>1500원</span>
              <span className="num">2</span>
              <a href="#">갖다놓기</a>
            </li>
          </ul>
          <Sum>
            <strong>총합</strong>: <span>3850원</span>
          </Sum>
        </div>
      </Basket>
    </ProductsBox>
  );
};

export default SuperMarketTemplate;
