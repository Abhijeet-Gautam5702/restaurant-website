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
      duration: 0.5,
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
    <div id='about' className="app__welcome app__flex">
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
      <div className="welcome__intro">
        <h2 className="head-text">
          welcome to <span>restro</span>
        </h2>
        <p className="p-text ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
          dignissimos aut commodi ex earum repellat nulla porro, et quia
          voluptatibus Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Voluptas, explicabo.
        </p>
        <p className="p-text ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid,
          amet asperiores quasi distinctio nesciunt iusto, quod et non quis,
          labore repellendus? Dicta ea tempore id cumque soluta odit atque harum
          cum quas impedit laborum temporibus asperiores voluptatum nisi alias,
          expedita, fuga iste ad quis unde. Perferendis molestiae esse fugit
          labore odio, omnis tempora sunt.
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
