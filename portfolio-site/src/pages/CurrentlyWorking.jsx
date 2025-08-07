import React, { useEffect } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  animate,
} from "motion/react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import Footer from "../components/Footer";
import BgImage from "../components/BgImage";


const CurrentlyWorking = () => {
  return (
    <>
    <BgImage className="grid place-content-center">
      <motion.div className="relative z-10 flex flex-col items-center"
      initial={{opacity: 0, y: -50}}
      animate={{opacity: 1, y: 0 }}
      transition={{duration: 1.5, ease: "easeInOut", staggerChildren: 0.5 }}>
        <div className="md:text-7xl sm:text-5xl text-3xl">🚧</div>
        <h1 className="max-w-3xl bg-gradient-to-br from-white to-gray-500 bg-clip-text text-3xl text-center leading-tight font-medium text-transparent sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight">
          I'm working on it...
        </h1>
        <h1 className="my-6 max-w-2xl text-center text-base leading-relaxed md:text-2xl md:leading-relaxed">
          I've got some stuff in the works once I'm happy to share them i'll
          post them here.
        </h1>
        <motion.div
          whileHover={{
            scale: 1.015,
          }}
          whileTap={{ scale: 0.985 }}
          className="group relative flex w-fit items-center gap-1.5 rounded-full bg-gray-950/10 px-4 py-2 text-gray-50 transition-colors hover:bg-gray-950/50"
        >
          <Link to={"/"}>Back to Home</Link>
          <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12"/>
        </motion.div>
      </motion.div>
    </BgImage>
    <Footer />
    </>
  );
};

export default CurrentlyWorking;
