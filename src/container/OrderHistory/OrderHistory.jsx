import React from "react";
import "./OrderHistory.scss";

import { AiFillCaretDown } from "react-icons/ai";

//testing

const ordHistory = [1, 2, 3, 4];

export default function OrderHistory() {
  return (
    <div className="app__container app__flex app__ordHist">
      <h2 className="head-text">
        Wanna <span className="accent">re-order</span> something from
        <span className="accent"> previous orders?</span>
      </h2>
      <div className="ordHist-itemsList">
        {ordHistory.map((item) => {
          return (
            <div className="app__flex ordHist__item">
              <div className="ordHist__item-id">
                <p className="subhead-text ">RESTRO#149</p>
                <AiFillCaretDown />
              </div>
              <div className="item-orderDetails">
                <div className="orderDetails-dateTime">
                  <p className="p-text">Feb 04, 2023</p>
                  <p className="p-text">1:45 PM</p>
                </div>
                <div className="orderDetails-amt">
                  <p className="subhead-text">$ 147.5</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
