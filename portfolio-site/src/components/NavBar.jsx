import React from "react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { IoHome, IoDocument } from "react-icons/io5";
import { FaInfoCircle } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa6";
import NavElement from "./NavElement";

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul
        className="flex justify-between justify-self-center w-60
          bg-gradient-to-r from-purple-500/30 via-red-500/30 to-yellow-500/30 
          p-4 rounded-4xl drop-shadow-xl"
      >
        <NavElement icon={<IoHome className="size-7 text-white" />} infoTag={"Home"} marLeft={"ml-[-20px]"}/>
        <NavElement icon={<FaInfoCircle className="size-7 text-white" />} infoTag={"About"} marLeft={"ml-[-22px]"}/>
        <NavElement icon={<FaBriefcase className="size-7 text-white"/>} infoTag={"Projects"} marLeft={"ml-[-28px]"}/>
        <NavElement icon={<IoDocument className="size-7 text-white "/>} infoTag={"Blog"} marLeft={"ml-[-16px]"}/>
      </ul>
    </nav>
  );
};

export default NavBar;
