import React, { useState, useEffect } from "react";
import "./Menu.scss";
import ItemCard from "../../components/ItemCard/ItemCard";
// import Navbar from "../../components/Navbar/Navbar";
import { images } from "../../assets/images";

import ItemAddedModal from "../../components/Modal/ItemAddedModal";


const menuItems = [
  {
    id: 1,
    name: "Chicken Fiesta",
    price: "50",
    rating: 4.5,
    label: "best seller",
    isVeg: false,
    img: images.gallery1,
    tags: ["lunch", "non-veg", "drinks", "all"],
  },
  {
    id: 2,
    name: "Veg Fiesta",
    price: "30",
    rating: 3.8,
    label: "new arrival",
    isVeg: true,
    img: images.gallery2,
    tags: ["lunch", "dinner", "veg", "all"],
  },
  {
    id: 3,
    name: "Townhouse ",
    price: "30",
    rating: 2.8,
    label: "",
    isVeg: true,
    img: images.gallery3,
    tags: ["dinner", "veg", "drinks", "all"],
  },
  {
    id: 4,
    name: "Grilled Feast",
    price: "30",
    rating: 4.9,
    label: "best seller",
    isVeg: true,
    img: images.gallery4,
    tags: ["lunch", "dinner", "veg", "all"],
  },
];

export default function Menu() {
  const [displayItems, setDisplayItems] = useState(menuItems);
  const [isActive, setIsActive] = useState(0);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const filters = document.querySelectorAll(".filter");
    // console.log(filters[3]);

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
