"use client";
import { motion } from "framer-motion";
import React, { ComponentPropsWithoutRef, PropsWithoutRef } from "react";

interface ImageProps extends ComponentPropsWithoutRef<"img"> {
  variants: {};
  src: string;
}

const ImageAnimation = ({ variants, src, className, alt }: ImageProps) => {
  return (
    <motion.img
      variants={variants}
      animate="animate"
      src={src}
      alt={alt}
      className={className}
    />
  );
};

export default ImageAnimation;
