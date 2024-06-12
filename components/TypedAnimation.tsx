"use client";

import React, { ComponentPropsWithoutRef } from "react";
import { TypeAnimation } from "react-type-animation";

interface Props extends ComponentPropsWithoutRef<"h1"> {
  itemSequence: (string | number)[];
}

const TypedAnimation = ({ itemSequence, className }: Props) => {
  return (
    <TypeAnimation
      sequence={itemSequence}
      wrapper="h1"
      speed={50}
      repeat={Infinity}
      className={`${className} font-montserrat font-semibold text-xl xl:text-5xl`}
    ></TypeAnimation>
  );
};

export default TypedAnimation;
