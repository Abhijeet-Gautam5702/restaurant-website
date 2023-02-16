import React from "react";
import "./ServiceCard.scss";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 1,
      staggerChildren: 0.5,
    },
  },

  whileHover: {
    scale: 1.1,
  },
};

export default function ServiceCard({ dataItem, variants }) {
  const { title, description, icon } = dataItem;
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      whileHover="whileHover"
      className="services__card"
    >
      <img src={icon} alt="icon" />
      <h2 className="subhead-text">{title}</h2>
      <p className="p-text">{description}</p>
    </motion.div>
  );
}
