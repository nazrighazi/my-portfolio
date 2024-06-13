"use client";

import { AnimatePresence, AnimationProps, motion } from "framer-motion";
import React from "react";

interface Props {
  item: string;
}

const sliderText = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-440%",
  },
};

const SliderAnimation = ({ item }: Props) => {
  return (
    <motion.div
      variants={sliderText}
      initial="initial"
      animate="animate"
      className=" w-[50%]"
      transition={{ repeat: Infinity, repeatType: "mirror", duration: 20 }}
    >
      {item}
    </motion.div>
  );
};

export default SliderAnimation;
