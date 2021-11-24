import styled from "styled-components";

const CartStyles = styled.main`
  margin: 2rem 0;
  position: relative;
  min-height: 100vh;
  padding: 2rem 0;
  margin-bottom: 50px;
  .mycart {
    background: #fff;
    padding: 2rem;
  }
  .orders {
    background: #fff;
    padding: 2rem;
    margin: 2rem 0;
  }
  .orders-promotion {
    display: flex;
    align-items: center;
    padding: 2rem;
    background-color: #fff;
    p {
      flex-basis: 70%;
      justify-self: flex-start;
      margin-left: 3rem;
      font-size: 1.5rem;
    }
  }

  .checkout {
    position: absolute;

    bottom: 0;
    left: 0;
    width: 100%;
    text-align: center;
    button {
      color: #fff;
      display: flex;
      justify-content: space-between;
      background-color: var(--primary-color);
      width: 100%;
      padding: 2rem;
      border-radius: 5px;
      font-size: 2rem;
      font-weight: 500;
    }
  }
`;

export default CartStyles;
