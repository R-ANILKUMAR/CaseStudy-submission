import { useImperativeHandle } from "react";
import styled from "styled-components";

const CartItemStyles = styled.div`
  display: flex;
  height: 100px;
  background-color: #fff;
  margin: 2rem 0;
  border: 2rem solid #fff;

  img {
    width: auto;
    height: 100%;
    margin-right: 2rem;
  }
  .no-items {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 2rem;
    .buttons {
      display: flex;
      align-items: center;
    }
    button {
      background-color: var(--primary-color);
      text-align: center;
      border-radius: 5px;
      padding: 10px;
      color: #fff;
      margin: 0 10px;
      padding-top: 10px;
    }
  }
`;

export default CartItemStyles;
