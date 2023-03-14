import React, { useEffect, useState } from "react";
import "./Cart.scss";
import CartItem from "../../components/CartItem/CartItem";
// import { images } from "../../assets/images/index";
// import { cartItems } from "../../components/ItemCard/ItemCard";
import { useSelector } from "react-redux";

/*
const cartItems = [
  {
    name: "Chicken Fiesta",
    price: "50",
    rating: 4.5,
    label: "best seller",
    isVeg: false,
    img: images.gallery1,
    tags: ["lunch", "non-veg", "drinks", "all"],
    qt: 2,
  },
  {
    name: "Veg Fiesta",
    price: "30",
    rating: 3.8,
    label: "new arrival",
    isVeg: true,
    img: images.gallery2,
    tags: ["lunch", "dinner", "veg", "all"],
    qt: 2,
  },
  {
    name: "Townhouse ",
    price: "30",
    rating: 2.8,
    label: "",
    isVeg: true,
    img: images.gallery3,
    tags: ["dinner", "veg", "drinks", "all"],
    qt: 2,
  },
  {
    name: "Grilled Feast",
    price: "30",
    rating: 4.9,
    label: "best seller",
    isVeg: true,
    img: images.gallery4,
    tags: ["lunch", "dinner", "veg", "all"],
    qt: 2,
  },
];
*/

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
    <div className="app__container app__flex app__cart">
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
        <p className="subhead-text ">{20+totalBill}</p>
      </div>
    </div>
  );
}
