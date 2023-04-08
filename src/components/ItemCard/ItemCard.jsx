import React, { useEffect, useState } from "react";
import "./ItemCard.scss";
import { icons } from "../../assets/icons";
import { images } from "../../assets/images/index";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";

export default function ItemCard(props) {
  const { id, name, price, rating, isVeg, label, img, tags } =
    props.itemDetails;
  const toggleShowModal = props.toggleShowModal;

  const [toShow, setToShow] = useState(false);

  let labelColor;
  if (label === "best seller") {
    labelColor = "var(--dark-blue)";
  } else if (label === "new arrival") {
    labelColor = "var(--matt-black)";
  } else {
    labelColor = "transparent";
  }

  let ratingColor;
  if (rating < 3) {
    ratingColor = "var(--red)";
  } else if (rating < 4) {
    ratingColor = "#DC9823";
  } else {
    ratingColor = "var(--green)";
  }

  const labelStyle = {
    backgroundColor: labelColor,
  };
  const ratingStyle = {
    backgroundColor: ratingColor,
  };
  const filterStyle = {
    backgroundColor: "black",
  };

  const dispatch = useDispatch();

  function handleAddToCartClick(e) {
    // set toShow = true everytime the button is clicked,
    // after 2 seconds. set toShow = false again
    toggleShowModal();

    dispatch(
      addToCart({
        name,
        id,
        price,
        img,
      })
    );
  }

  return (
    <div className="card__item">
      <p style={labelStyle} className="card__item-label">
        {label}
      </p>
      <div className="card__item-detail">
        <img src={img} alt="dish_img" />
        <p className="subhead-text">{name}</p>
        <div className="rating-price-cont">
          <div style={ratingStyle} className="rating">
            <div className="star">
              <img src={icons.star} alt="star" />
            </div>
            <p className="rating-text">{rating}</p>
          </div>
          <div className="price subhead-text">${price}</div>
        </div>
      </div>
      <div className="card__item-desc">
        <p className="p-text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia quod
          fuga dolor sed, amet ipsa placeat omnis corrupti voluptatem nam quae.
          Quo ratione magni velit.
        </p>
      </div>
      <button onClick={handleAddToCartClick} className="btn card__item-btn">
        add to cart
      </button>
    </div>
  );
}

let cartItems = JSON.parse(localStorage.getItem("cartItems"))
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [
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
    ];

export { cartItems };
