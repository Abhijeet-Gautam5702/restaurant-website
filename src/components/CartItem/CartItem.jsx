import React from "react";
import "./CartItem.scss";
import {
  increaseItemQuantity,
  decreaseItemQuantity,
} from "../../redux/cartSlice";
import { useDispatch } from "react-redux";

export default function CartItem(props) {
  const { id, price, name, qt, img } = props.item;

  const dispatch = useDispatch();
  function handleUpdateQuantity(e) {
    if (e.target.textContent === "+") {
      dispatch(increaseItemQuantity({ id }));
    } else {
      dispatch(decreaseItemQuantity({ id }));
      // dispatch(deleteFromCart({ id }));
    }
  }
  return (
    <div className="cart__item app__flex">
      <img src={img} alt="item" />
      <div className="cart__item-details app__flex">
        <p className="subhead-text">{name}</p>
        <p className="subhead-text">{`$ ${price}`}</p>
        <div className="addToCart-control app__flex">
          <button className="btn" onClick={handleUpdateQuantity}>
            -
          </button>
          <p className="subhead-text">{qt}</p>
          <button className="btn" onClick={handleUpdateQuantity}>
            +
          </button>
        </div>
      </div>
      <div className="cart__item-bill subhead-text amt">
        {`$ ${price * qt}`}
      </div>
    </div>
  );
}
