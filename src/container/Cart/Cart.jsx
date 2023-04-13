import React, { useEffect, useState } from "react";
import "./Cart.scss";
import CartItem from "../../components/CartItem/CartItem";
import OrderPlacedModal from "../../components/Modal/OrderPlacedModal";

//react-redux
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../../redux/cartSlice";

export default function Cart() {
  const dispatch = useDispatch();

  const itemsAddedToCart = useSelector((state) => state.cart);

  const [totalBill, setTotalBill] = useState(0);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    let sum = 0;
    itemsAddedToCart.forEach((item) => {
      sum += item.price * item.qt;
    });
    setTotalBill(sum);
  }, [itemsAddedToCart]);

  function handlePlaceOrderClick() {
    // show modal
    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
    }, 4000);

    // empty the cart
    dispatch(clearCart());

    // update localstorage
    let history = localStorage.getItem("orderHistory")
      ? JSON.parse(localStorage.getItem("orderHistory"))
      : [];
    const completeOrderDetails = {
      orderID: Math.round(Math.random() * 100),
      orderDate: {
        date: 4,
        month: 2,
        year: 2023,
      },
      orderList: itemsAddedToCart.map((item) => {
        return item.name;
      }),
      orderTotal: 20+ totalBill,
    };
    history.push(completeOrderDetails);
    localStorage.setItem("orderHistory", JSON.stringify(history));
  }

  return (
    <div id="cart" className="app__container app__flex app__cart">
      <h2 className="head-text">
        customize your <span>cart</span>
      </h2>
      {showModal && <OrderPlacedModal />}
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
          <button
            className="btn app__cart-placeOrderBtn"
            onClick={handlePlaceOrderClick}
          >
            Place order
          </button>
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
