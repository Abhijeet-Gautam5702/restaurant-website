import React from "react";
import "./Welcome.scss";
import { motion } from "framer-motion";
import { images } from "../../assets/images/index";

const imgVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.2,
      // type: "spring",
      ease: "easeInOut",
    },
  },
  hover: {
    scale: 1.05,
  },
};

export default function Welcome() {
  return (
    <div id="about" className="app__welcome app__flex">
      <div
        className="welcome__gallery"
        variants={imgVariants}
        initial="hidden"
        whileInView="visible"
      >
        <img
          variants={imgVariants}
          whileHover="hover"
          src={images.gallery1}
          alt=""
        />
        <img
          variants={imgVariants}
          whileHover="hover"
          src={images.gallery2}
          alt=""
        />
        <img
          variants={imgVariants}
          whileHover="hover"
          src={images.gallery3}
          alt=""
        />
        <img
          variants={imgVariants}
          whileHover="hover"
          src={images.gallery4}
          alt=""
        />
      </div>
      <div className="welcome__intro">
        <h2 className="head-text">
          welcome to <span>restro</span>
        </h2>
        <p className="p-text ">
          Welcome to our restaurant, where every dish is a masterpiece and every
          experience is a delight. Our team of talented chefs and dedicated
          staff work tirelessly to bring you the best of our cuisine, prepared
          to perfection with only the freshest and highest-quality ingredients.
        </p>
        <p className="p-text ">
          At our restaurant, we believe that dining is not just about eating,
          but about experiencing. That's why we've created a welcoming ambiance
          that reflects our passion for great food and impeccable service.
          Whether you're looking for a romantic dinner, a family gathering, or a
          business lunch, we have the perfect setting for you. Our menu is a
          celebration of global flavors, with dishes that range from traditional
          favorites to innovative creations. And with our commitment to using
          sustainable and locally sourced ingredients, you can enjoy your meal
          with a clear conscience. So why wait? Come and discover the magic of
          our restaurant today!
        </p>

        <div className="welcome__intro-stats">
          <div className="stats-container">
            <p className="stats-number">10</p>
            <p className="subhead-text">
              years of <br /> experience
            </p>
          </div>
          <div className="stats-container">
            <p className="stats-number">30</p>
            <p className="subhead-text">
              skilled <br /> chefs
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
