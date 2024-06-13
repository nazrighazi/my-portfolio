"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import React, { PropsWithChildren, ReactNode, memo } from "react";

const PageTransition = ({ children }: PropsWithChildren<any>) => {
  const pathName = usePathname();
  return (
    <AnimatePresence mode="sync">
      <div key={pathName}>
        <motion.div
          className="h-full w-full fixed bg-background top-0 left-0 right-0 pointer-events-none z-20"
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
