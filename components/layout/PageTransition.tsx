"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import React, { PropsWithChildren, ReactNode, memo } from "react";

const PageTransition = ({ children }: PropsWithChildren<any>) => {
  const pathName = usePathname();
  return (
    <AnimatePresence mode="wait">
      <div key={pathName}>
        <motion.div
          className="h-screen w-screen fixed bg-background top-0 pointer-events-none"
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
          }}
        ></motion.div>
        {children}
      </div>
    </AnimatePresence>
  );
};

export default memo(PageTransition);
