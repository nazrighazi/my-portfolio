"use client";
import React, { useState } from "react";
import SidebarButton from "./SidebarButton";
import { AnimationProps, delay, motion } from "framer-motion";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const variants = {
    open: {
      clipPath: "circle(1000px at 350px 50px)",
      transition: {
        x: "",
        type: "spring",
        stiffness: 20,
      },
    },
    closed: {
      clipPath: "circle(30px at 350px 50px)",
      transition: {
        delay: 0.3,
        type: "spring",
        stiffness: 150,
        damping: 40,
      },
    },
  };
  return (
    <motion.div
      animate={open ? "open" : "closed"}
      className="flex flex-col items-center justify-center bg-white text-black "
    >
      <motion.div
        variants={variants}
        className="w-[400px] fixed top-0 right-0 bottom-0 h-screen bg-white z-40"
      ></motion.div>
      <SidebarButton setOpen={setOpen}></SidebarButton>
    </motion.div>
  );
};

export default Sidebar;
