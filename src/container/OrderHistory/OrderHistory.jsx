import React, { useEffect, useState } from "react";
import "./OrderHistory.scss";


export default function OrderHistory() {
  if (!localStorage.getItem("orderHistory")) {
    localStorage.setItem("orderHistory", JSON.stringify([]));
  }
  const [orderHistory, setOrderHistory] = useState(
    JSON.parse(localStorage.getItem("orderHistory"))
  );

  useEffect(() => {
    setOrderHistory(JSON.parse(localStorage.getItem("orderHistory")));
  }, [localStorage.getItem("orderHistory")]);

  console.log(typeof orderHistory);

  return orderHistory.length > 0 ? (
    <div className="app__container app__flex app__ordHist">
      <h2 className="head-text">
        Wanna repeat something from
        <span className="accent"> previous orders?</span>
      </h2>
      <div className="ordHist-itemsList">
        {orderHistory.map((item) => {
          const { orderDate, orderID, orderList, orderTotal } = item;
          return (
            <div className="app__flex ordHist__item">
              <div className="ordHist__item-id">
                <p className="subhead-text ">{`RESTRO#${orderID}`}</p>
                <p className="p-text">{`${orderDate.date}/${orderDate.month}/${orderDate.year}`}</p>
              </div>
              <div className="item-orderDetails">
                <ul className="orderDetails-dishes app__flex">
                  {orderList.map((orderItem) => {
                    return <li className="p-text">{orderItem}</li>;
                  })}
                </ul>
                <div className="orderDetails-amt">
                  <p className="subhead-text">{`$ ${orderTotal}`}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  ) : (
    <div className="app__container app__flex">
      <p className="subhead-text text-center">
        Uh Oh!! You have not ordered anything in the past. <br /> Kindly give us
        a chance to serve you.{" "}
      </p>
    </div>
  );
}
