import React from "react";
import { useState } from "react";
import { IoHome, IoDocument, IoChatboxEllipses, IoChatbubbleEllipses } from "react-icons/io5";
import { FaHourglassEnd, FaInfoCircle } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa6";
import NavElement from "./NavElement";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { MdPreview } from "react-icons/md";


const NavBar = () => {
  const { scrollY } = useScroll();

  const [hidden, setHidden] = useState(false)

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious();
    if (latest > prev && latest > 200) {
      setHidden(true)
    }else{
      setHidden(false)
    }
  })

  return (
    <motion.nav
      variants={{ visible: { y: 20 }, hidden: { y: "-200%" } }}
      transition={{ duration: 0.35, ease: "easeInOut"}}
      animate={hidden ? "hidden" : "visible"}
      className="navbar fixed z-20 place-self-center"
    >
      <ul
        className="flex justify-between justify-self-center w-70
          bg-gradient-to-r from-purple-500/30 via-red-500/30 to-yellow-500/30 
          p-4 rounded-4xl drop-shadow-xl"
      >
        <NavElement icon={<IoChatbubbleEllipses className="size-7 text-white"/>} infoTag={"Contact"} marLeft={"ml-[-25px]"} dest={"#hero"} />
        <NavElement
          icon={<FaHourglassEnd className="size-7 text-white" />}
          infoTag={"Experience"}
          marLeft={"ml-[-35px]"}
          dest={"#experience"}
        />
        <NavElement
          icon={<FaBriefcase className="size-7 text-white" />}
          infoTag={"Projects"}
          marLeft={"ml-[-28px]"}
          dest={"#projects"}
        />
        <NavElement
          icon={<FaInfoCircle className="size-7 text-white" />}
          infoTag={"About"}
          marLeft={"ml-[-22px]"}
          dest={"#about"}
        />
        <NavElement
          icon={<IoDocument className="size-7 text-white " />}
          infoTag={"Blog"}
          marLeft={"ml-[-16px]"}
          dest={"#blog"}
        />
      </ul>
    </motion.nav>
  );
};

export default NavBar;
