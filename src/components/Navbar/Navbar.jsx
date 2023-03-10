import React, { useState, useEffect } from "react";
import "./Navbar.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion } from "framer-motion";

//variants
const dropdownMenuAnimation = {
  open: {
    display: "block",
    opacity: [0, 1],
  },
  closed: {
    display: "none",
    opacity: [1, 0],
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

export default function Navbar({ onHomePage }) {
  const [navBGColor, setNavBGColor] = useState("rgba(0,0,0,0.4)");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function changeNavBGColor() {
      if (window.scrollY > window.innerHeight) {
        setNavBGColor("black");
      } else {
        setNavBGColor("rgba(0,0,0,0.4)");
      }
    }

    window.addEventListener("scroll", changeNavBGColor);

    return () => window.removeEventListener("scroll", changeNavBGColor);
  });

  return (
    <>
      <nav
        style={
          onHomePage
            ? { backgroundColor: navBGColor }
            : { backgroundColor: "var(--matt-black)" }
        }
      >
        {/* Navbar for large devices */}
        <div className="navbar">
          <div className="navbar__logo head-text">
            <p>Restro</p>
          </div>
          <ul className="navbar__menu">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#menu">Menu</a>
            </li>
            <li>
              <a href="#order-history">Order History</a>
            </li>
            <li>
              <a href="#about">About</a>
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
        </div>

        {/* Navbar for small devices */}
        {isOpen && (
          <motion.ul
            className="navbar__menu-dropdown"
            animate={isOpen ? "open" : "closed"}
            variants={dropdownMenuAnimation}
            transition={{ duration: 0.3 }}
            onClick={() => setIsOpen((isOpen) => !isOpen)}
          >
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#menu">Menu</a>
            </li>
            <li>
              <a href="#order-history">Order History</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
          </motion.ul>
        )}
      </nav>
    </>
  );
}
