import React, { useEffect, useState } from "react";
import "./Cart.scss";
import CartItem from "../../components/CartItem/CartItem";
import { useSelector } from "react-redux";

export default function Cart() {
  const itemsAddedToCart = useSelector((state) => state.cart).filter(
    (item) => item.qt > 0
  );
  const [totalBill, setTotalBill] = useState(0);
  useEffect(() => {
    let sum = 0;
    itemsAddedToCart.forEach((item) => {
      sum += item.price * item.qt;
    });
    setTotalBill(sum);
  }, [itemsAddedToCart]);

  return (
    <div id="cart" className="app__container app__flex app__cart">
      <h2 className="head-text">
        customize your <span>cart</span>
      </h2>
      <div className="app__cart-items">
        {itemsAddedToCart.map((item) => {
          return <CartItem key={Math.random()} item={item} />;
        })}
      </div>
      <div className="app__cart-otherCharges app__cart-items">
        <div className="app__flex">
          <p className="subhead-text">Packaging charges</p>
          <p className="subhead-text">{`$15`}</p>
        </div>
        <div className="app__flex">
          <p className="subhead-text">Taxes</p>
          <p className="subhead-text">{`$5`}</p>
        </div>
      </div>
      <div className="app__cart-total app__cart-items app__flex">
        <p className="subhead-text">Order Total</p>
        <p className="subhead-text ">{`$${20 + totalBill}`}</p>
      </div>
    </div>
  );
}
