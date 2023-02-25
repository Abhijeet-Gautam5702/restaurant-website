import React from "react";
import "./ItemCard.scss";
import { icons } from "../../assets/icons";

export default function ItemCard(props) {
  const { name, price, rating, isVeg, label, img } = props.itemDetails;

  return (
    <div className="card__item">
      <p className="card__item-label">{label}</p>
      <div className="card__item-detail">
        <img src={img} alt="dish_img" />
        <p className="subhead-text">{name}</p>
        <div className="rating-price-cont">
          <div className="rating">
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
      <button className="btn card__item-btn">add to cart</button>
    </div>
  );
}
