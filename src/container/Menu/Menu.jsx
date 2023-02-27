import React, { useState } from "react";
import "./Menu.scss";
import ItemCard from "../../components/ItemCard/ItemCard";
// import Navbar from "../../components/Navbar/Navbar";
import { images } from "../../assets/images";

const menuItems = [
  {
    name: "Chicken Fiesta",
    price: "50",
    rating: 4.5,
    label: "best seller",
    isVeg: false,
    img: images.gallery1,
    tags: ["lunch", "non-veg", "drinks", "all"],
  },
  {
    name: "Veg Fiesta",
    price: "30",
    rating: 3.8,
    label: "new arrival",
    isVeg: true,
    img: images.gallery2,
    tags: ["lunch", "dinner", "veg", "all"],
  },
  {
    name: "Townhouse ",
    price: "30",
    rating: 2.8,
    label: "",
    isVeg: true,
    img: images.gallery3,
    tags: ["dinner", "veg", "drinks", "all"],
  },
  {
    name: "Grilled Feast",
    price: "30",
    rating: 4.9,
    label: "best seller",
    isVeg: true,
    img: images.gallery4,
    tags: ["lunch", "dinner", "veg", "all"],
  },
];

// const filterItemColors={'lunch':'var(--orange)'}

export default function Menu() {
  const [displayItems, setDisplayItems] = useState(menuItems);
  const [isActive, setIsActive] = useState(false);

  function handleClick(e) {
    const filterName = e.target.textContent;
    // const filterType=e.target;
    setDisplayItems((prevDisplayItems) => {
      const newDisplayItems = menuItems.filter((item) =>
        item.tags.includes(filterName)
      );
      return newDisplayItems;
    });
    setIsActive((isActive) => !isActive);
    /*
    make an array indicating active states
    whenever a filter-button is clicked, update active state
    change style of filter-btn according to new active state
    */
  }

  return (
    <>
      {/* <Navbar onHomePage={false}/> */}
      <div id="menu" className=" app__menu app__container">
        <h2 className="head-text app__menu-title">
          We are here to
          <span> Serve you</span>
        </h2>
        <div className="app__menu-filters">
          <ul>
            <li
              style={{
                backgroundColor: isActive
                  ? "var(--orange)"
                  : "var(--light-blue)",
              }}
              onClick={handleClick}
              className="subhead-text meals"
            >
              all
            </li>
            <li onClick={handleClick} className="subhead-text meals">
              lunch
            </li>
            <li onClick={handleClick} className="subhead-text meals">
              dinner
            </li>
            <li onClick={handleClick} className="subhead-text meals">
              drinks
            </li>
          </ul>
          <ul>
            <li onClick={handleClick} className="subhead-text filter-veg veg">
              veg
            </li>
            <li
              onClick={handleClick}
              className="subhead-text filter-non-veg non-veg"
            >
              non-veg
            </li>
          </ul>
        </div>
        <div className="app__menu-items">
          {displayItems.map((item) => {
            return <ItemCard key={Math.random()} itemDetails={item} />;
          })}
        </div>
      </div>
    </>
  );
}
