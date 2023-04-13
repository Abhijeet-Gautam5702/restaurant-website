import React, { useState, useEffect } from "react";
import "./Menu.scss";
import ItemCard from "../../components/ItemCard/ItemCard";

import ItemAddedModal from "../../components/Modal/ItemAddedModal";
import menuItems from "./menuItems";



export default function Menu() {
  const [displayItems, setDisplayItems] = useState(menuItems);
  const [isActive, setIsActive] = useState(0);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const filters = document.querySelectorAll(".filter");

    filters.forEach((filter) => {
      if (filter.id === isActive) {
        if (isActive <= 3) {
          filter.style.backgroundColor = "var(--orange)";
          filter.style.color = "var(--white)";
        } else if (isActive == 4) {
          filter.style.backgroundColor = "var(--green)";
          filter.style.color = "var(--white)";
        } else {
          filter.style.backgroundColor = "var(--red)";
          filter.style.color = "var(--white)";
        }
      } else {
        filter.style.backgroundColor = "var(--light-blue)";
        filter.style.color = "var(--matt-black)";
      }
    });
  }, [isActive]);

  function handleClick(e) {
    const filterName = e.target.textContent;
    const filterId = e.target.id;

    setDisplayItems((prevDisplayItems) => {
      const newDisplayItems = menuItems.filter((item) => {
        return item.tags.includes(filterName);
      });
      return newDisplayItems;
    });

    setIsActive(filterId);
  }

  function toggleShowModal() {
    setShowModal(true);
    setTimeout(() => setShowModal(false), 1000);
  }

  return (
    <>
      <ItemAddedModal toShow={showModal}/>
      <div id="menu" className=" app__menu app__container">
        <h2 className="head-text app__menu-title">
          We are here to
          <span> Serve you</span>
        </h2>
        <div className="app__menu-filters">
          <ul>
            <li
              onClick={handleClick}
              id={0}
              className="subhead-text meals filter btn-hover-state"
            >
              all
            </li>
            <li
              onClick={handleClick}
              id={1}
              className="subhead-text meals filter"
            >
              lunch
            </li>
            <li
              onClick={handleClick}
              id={2}
              className="subhead-text meals filter"
            >
              dinner
            </li>
            <li
              onClick={handleClick}
              id={3}
              className="subhead-text meals filter"
            >
              drinks
            </li>
          </ul>
          <ul>
            <li
              onClick={handleClick}
              id={4}
              className="subhead-text filter-veg veg filter"
            >
              veg
            </li>
            <li
              onClick={handleClick}
              id={5}
              className="subhead-text filter-non-veg non-veg filter"
            >
              non-veg
            </li>
          </ul>
        </div>
        <div className="app__menu-items">
          {displayItems.map((item) => {
            return (
              <ItemCard
                key={Math.random()}
                itemDetails={item}
                toggleShowModal={toggleShowModal}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
