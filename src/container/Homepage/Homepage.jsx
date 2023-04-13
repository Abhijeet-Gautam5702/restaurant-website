import React from "react";
import { motion } from "framer-motion";
import "./Homepage.scss";
import { NavLink } from "react-router-dom";

const homepageVariants = {
  hidden: {
    opacity: 0,
    x: "-20%",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeIn",
    },
  },
};

export default function Homepage() {
  return (
    <div id="home" className="app__container  home ">
      <motion.div
        className="home__welcome-container"
        variants={homepageVariants}
        initial="hidden"
        animate="visible"
      >
        <h1 className="head-text">
          enjoy our <br />
          <span
            style={{
              color: "var(--orange)",
            }}
          >
            delicious{" "}
          </span>{" "}
          meals
        </h1>
        <p className="p-text">
          Welcome to our restaurant, where every dish is a celebration of flavor
          and quality. From our masterfully prepared entrees to our handcrafted
          cocktails, we strive to deliver an unforgettable dining experience for
          all of our guests.
        </p>

        <button className=" btn home__menuBtn">
          <NavLink to="/menu">explore menu</NavLink>
        </button>
      </motion.div>
    </div>
  );
}
