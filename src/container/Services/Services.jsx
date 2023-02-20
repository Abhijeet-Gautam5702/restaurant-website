import React from "react";
import "./Services.scss";
import { motion } from "framer-motion";
import { icons } from "../../assets/icons/index";
import ServiceCard from "../../components/ServiceCard/ServiceCard";

const servicesData = [
  {
    title: "quality food",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed dignissimos tenetur temporibus accusantium cupiditate nam!",
    icon: icons.cutlery,
  },
  {
    title: "master chefs",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed dignissimos tenetur temporibus accusantium cupiditate nam!",
    icon: icons.chef,
  },
  {
    title: "24/7 service",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed dignissimos tenetur temporibus accusantium cupiditate nam!",
    icon: icons.support,
  },
  {
    title: "order online",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed dignissimos tenetur temporibus accusantium cupiditate nam!",
    icon: icons.cart,
  },
];

const variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      // type: "spring",
      duration: 0.7,
      // staggerChildren: 0.25,
      ease: "easeInOut",
    },
  },
  whileHover: {
    scale: 1.1,
  },
};

export default function Services() {
  return (
    <div className="app__services app__flex ">
      <h2 className="head-text">
        we care for <span>our customers</span>
      </h2>
      <motion.div
        variants={variants}
        initial="hidden"
        animate="visible"
        className="app__services-cards"
      >
        {servicesData.map((item) => {
          return <ServiceCard key={Math.random()} dataItem={item} />;
        })}
      </motion.div>
    </div>
  );
}
