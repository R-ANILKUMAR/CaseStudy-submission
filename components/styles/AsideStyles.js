import styled from "styled-components";

const AsideStyles = styled.main`
  aside {
    margin: 0;
    padding: 0;
    width: 200px;
    background-color: var(--light-grey);
    position: absolute;
    margin-top: 5px;
    overflow: auto;
    top: 10rem;
    bottom: 0;

    button {
      display: block;
      color: #000;
      padding: 16px;
      text-decoration: none;
      width: 100%;
      border: none;
      text-align: left;
      border-bottom: 1px solid var(--medium-grey);

      &:active {
        background-color: var(--primary-color);
      }
    }

    @media screen and (max-width: 800px) {
      aside {
        width: 100%;
        height: auto;
        position: relative;
      }
    }

    @media screen and (max-width: 800px) {
      transform: translateX(-100%);
    }
  }
`;

export default AsideStyles;
