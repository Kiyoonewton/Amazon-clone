import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Product.css";
import { addToBasket } from "./Store/ind";
function Product(props) {
  const basket = useSelector((state) => state.total.basket);
  const dispatch = useDispatch();
  // const [{ basket }, dispatch] = useStatevalue();

  console.log("this is the basket >>>", basket);
  const addToBas = () => {
    dispatch(addToBasket(props));
  };
  return (
    <div className="product">
      <div className="product__info">
        <p className="product__name"> {props.title} </p>
        <p className="product__price">
          <small>$</small>
          <strong>{props.price}</strong>
        </p>
        <div className="product__rating">
          {Array(props.rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
      </div>
      <img src={props.image} alt="img1" className="" />
      <button onClick={addToBas}>Add to Basket</button>
    </div>
  );
}

export default Product;
