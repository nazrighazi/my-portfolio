"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
Link;

interface links {
  name: string;
  path: string;
}

const headerLinks: Array<links> = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Projects",
    path: "/projects",
  },
  {
    name: "Resume",
    path: "/resume",
  },
];

const Nav = () => {
  const pathName = usePathname();
  return (
    <div className="hidden xl:flex flex-row gap-12 font-montserrat ">
      {headerLinks.map((link, index) => (
        <Link
          className={`text-xl ${
            pathName === link.path &&
            "text-indigo-700 border-b-2 border-indigo-700 "
          } capitalize transition-all hover:text-indigo-700`}
          key={index}
          href={link.path}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
};

export default Nav;
