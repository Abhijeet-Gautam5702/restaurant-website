import React, { useState } from "react";
import "./Navbar.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion } from "framer-motion";
//variants
const dropdownMenuAnimation = {
  open: {
    transform: "translate(0,25%)",
  },
  closed: {
    transform: "translate(0,-100%)",
  },
};
//variants
const toggleMenuAnimation = {
  open: {
    rotate: -90,
  },
  closed: {
    rotate: 0,
  },
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav>
        <div className="navbar__logo head-text">
          <p>Restro</p>
        </div>
        <ul className="navbar__menu">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Menu</a>
          </li>
          <li>
            <a href="">Order History</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
        </ul>

        <motion.div
          className="navbar__toggleMenu-icon"
          onClick={() => setIsOpen((isOpen) => !isOpen)}
          variants={toggleMenuAnimation}
          animate={isOpen ? "open" : "closed"}
          transition={{ duration: 0.3 }}
        >
          <GiHamburgerMenu />
        </motion.div>
      </nav>

      <motion.ul
        className="navbar__menu-dropdown"
        animate={isOpen ? "open" : "closed"}
        transition={{ duration: 0.3, type: "tween" }}
        variants={dropdownMenuAnimation}
        initial={true}
      >
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Menu</a>
        </li>
        <li>
          <a href="">Order History</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
      </motion.ul>
    </>
  );
}
