import React from "react";
import "./Menu.scss";
import ItemCard from "../../components/ItemCard/ItemCard";
import Navbar from "../../components/Navbar/Navbar";
import { images } from "../../assets/images";

const menuItems = [
  {
    name: "Chicken Fiesta",
    price: "50",
    rating: 4.5,
    label: "best seller",
    isVeg: false,
    img: images.gallery1,
  },
  {
    name: "Veg Fiesta",
    price: "30",
    rating: 3.8,
    label: "new arrival",
    isVeg: true,
    img: images.gallery2,
  },
  {
    name: "Veg Fiesta",
    price: "30",
    rating: 3.8,
    label: "new arrival",
    isVeg: true,
    img: images.gallery2,
  },
  {
    name: "Veg Fiesta",
    price: "30",
    rating: 3.8,
    label: "new arrival",
    isVeg: true,
    img: images.gallery2,
  },
];

export default function Menu() {
  return (
    <>
    <Navbar />
    <div className=" app__menu app__container">
      <h2 className="head-text app__menu-title">
       We are here to 
        <span> Serve you</span>
      </h2>
      <div className="app__menu-filters">
        <ul>
          <li>lunch</li>
          <li>dinner</li>
          <li>drinks</li>
        </ul>
        <ul>
          <li className="filter-veg">veg</li>
          <li className="filter-non-veg">non-veg</li>
        </ul>
      </div>
      <div className="app__menu-items">
        {menuItems.map((item) => {
          return <ItemCard key={Math.random()} itemDetails={item} />;
        })}
      </div>
    </div>
    </>
  );
}
