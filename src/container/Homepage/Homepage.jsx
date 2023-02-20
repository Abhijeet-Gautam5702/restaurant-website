import React from "react";
import { motion } from "framer-motion";
import "./Homepage.scss";

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
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci, in
          eaque. Beatae minima deserunt cumque dolorem consectetur. Ratione
          aliquid, assumenda unde repellendus similique dolorum quis.
        </p>
        <button className=" btn home__menuBtn">explore menu</button>
      </motion.div>
    </div>
  );
}
