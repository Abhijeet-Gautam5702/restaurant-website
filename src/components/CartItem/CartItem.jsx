import React from "react";
import "./CartItem.scss";

export default function CartItem(props) {
  const { item } = props;
  // console.log(item);
  return (
    <div className="cart__item app__flex">
      <img src={item.img} alt="item" />
      <div className="cart__item-details app__flex">
        <p className="subhead-text">{item.name}</p>
        <p className="subhead-text">{`$ ${item.price}`}</p>
        <div className="addToCart-control app__flex">
          <button className="btn">-</button>
          <p className="subhead-text">{item.qt}</p>
          <button className="btn">+</button>
        </div>
      </div>
      <div className="cart__item-bill subhead-text amt">
        {`$ ${item.price * item.qt}`}
      </div>
    </div>
  );
}
