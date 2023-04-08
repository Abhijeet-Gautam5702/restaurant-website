import React from "react";
import { icons } from "../../assets/icons/index";

import "./ItemAddedModal.scss";

export default function ItemAddedModal({ toShow = false }) {
  if (toShow === false) {
    return null;
  }
  return (
    <div className="app__modal app__flex">
      <div className="app__modal-icon">
        <img src={icons.tick} alt="checkmark" />
      </div>
      <p className="app__modal-text p-text">Item successfully added to cart</p>
    </div>
  );
}
