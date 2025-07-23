import React from "react";
import ConnectButtons from "./ConnectButtons";
import { animate, motion } from "motion/react";

const Hero = () => {
  const variants = {
    initial: {
      opacity: 0,
      y: -40,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
        staggerChildren: 0.4,
      },
    },
  };

  const childVariants = {
    initial: {
      opacity: 0,
      y: -40,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="flex text-white"
      id="hero"
    >
      <div className="w-1/4"></div>
      <div className="flex-col">
        <motion.div variants={childVariants} className="flex">
          <h1 className="font-roboto font-display text-5xl ">Hi I'm</h1>
          <h1 className="font-roboto font-display text-5xl ml-3.5 italic">
            Archie
          </h1>
        </motion.div>
        <motion.h1 variants={childVariants} className="font-roboto font-display text-5xl">
          A Front-End Web Developer
        </motion.h1>
        <motion.p variants={childVariants} className="font-roboto text-zinc-400 mt-5 w-3/4 md:w-full">
          Recent Interactive Media Graduate Based In London, UK
        </motion.p>
        <ConnectButtons />
      </div>
    </motion.div>
  );
};

export default Hero;
