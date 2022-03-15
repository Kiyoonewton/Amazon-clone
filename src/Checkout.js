import React from "react";
import "./checkout.css";
import image0 from "./images/Amazon9.jpg";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import { useDispatch, useSelector } from "react-redux";
function Checkout() {
  // const dispatch = useDispatch();
  const basket = useSelector((state) => state.total.basket);
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img className="checkout__Ad" src={image0} alt="" />
        <div>
          <h2 className="checkout__title">Your Shopping Basket</h2>
          {/* {console.log(basket)} */}
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
          {/* CheckoutProduct */}
          {/* CheckoutProduct */}
          {/* CheckoutProduct */}
          {/* CheckoutProduct */}
          {/* CheckoutProduct */}
          {/* CheckoutProduct */}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
