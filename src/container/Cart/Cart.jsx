import React, { useEffect, useState } from "react";
import "./Cart.scss";
import CartItem from "../../components/CartItem/CartItem";
import { useSelector } from "react-redux";

import { NavLink } from "react-router-dom";

export default function Cart() {
  const itemsAddedToCart = useSelector((state) => state.cart);

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

      {itemsAddedToCart.length > 0 ? (
        <>
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
          <NavLink to="/payment">
            <button className="btn app__cart-placeOrderBtn">Place order</button>
          </NavLink>
        </>
      ) : (
        <p className="app__emptyCart-label subhead-text">
          Uh Oh !! You have no items in your cart <br />
          Please add at least one item and come back
        </p>
      )}
    </div>
  );
}
