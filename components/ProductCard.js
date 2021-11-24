import { useDispatch, useSelector } from "react-redux";
import { AddCart } from "../actions/actions";
import CardStyle from "./styles/CardStyles";

export default function ProductCard({ product }) {
  //   console.log(product);
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  function addProduct(item) {
    let products = [];
    if (localStorage.getItem("products")) {
      products = JSON.parse(localStorage.getItem("products"));
    }
    products.push(item);
    localStorage.setItem("products", JSON.stringify(products));
  }

  if (!product) {
    return <p>loading ....</p>;
  }
  return (
    <CardStyle>
      <div className="container">
        <div className="container-one">
          <div className="container-img">
            <img src={product.imageURL} alt={product.name} />
          </div>
          <div className="container-description">
            <p className="description-text">{product.description}</p>
          </div>
        </div>

        <div className="container-price">
          <h3>MRP Rs.{product.price}</h3>
          <button
            onClick={() => {
              addProduct(product);
              dispatch(AddCart(product));
              // console.log(state);
            }}
          >
            BuyNow
          </button>
        </div>
      </div>
    </CardStyle>
  );
}
