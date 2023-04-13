import React from "react";
import "./OrderPlacedModal.scss";
import { icons } from "../../assets/icons/index";

export default function OrderPlacedModal() {
  return (
    <div className="app__flex app__modal-orderPlaced">
      {/* <img src={icons.tick} alt="checkmark" /> */}
      <h2 className="subhead-text text-center">Order Placed Successfully
      </h2>
      <hr />
      <p className="p-text">
        {" "}
        We are glad that you have given us the chance to serve you. The order
        will be delivered hot and fresh.
      </p>
    </div>
  );
}
