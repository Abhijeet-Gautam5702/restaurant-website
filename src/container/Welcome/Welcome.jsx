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
      duration: 1.5,
      type: "spring",
      ease: "easeInOut",
    },
  },
  hover: {
    scale: 1.05,
  },
};

export default function Welcome() {
  return (
    <div className="app__welcome app__flex app__container">
      <motion.div
        className="welcome__gallery"
        variants={imgVariants}
        initial="hidden"
        whileInView="visible"
      >
        <motion.img
          variants={imgVariants}
          whileHover="hover"
          src={images.gallery1}
          alt=""
        />
        <motion.img
          variants={imgVariants}
          whileHover="hover"
          src={images.gallery2}
          alt=""
        />
        <motion.img
          variants={imgVariants}
          whileHover="hover"
          src={images.gallery3}
          alt=""
        />
        <motion.img
          variants={imgVariants}
          whileHover="hover"
          src={images.gallery4}
          alt=""
        />
      </motion.div>
      <div className="welcome__intro">Introduction</div>
    </div>
  );
}
