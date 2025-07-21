import React from "react";
import { motion } from "motion/react";
import {
  AboutBlock,
  Block,
  GridBlock,
  ProjectBlock,
  ProjectLibBlock,
  SpotifyBlock,
  TechStackBlock,
} from "./Block";

const Bento = () => {
  return (
    <div className="min-h-screen bg-black px-5 py-12 text-zinc-50">
      <motion.div
        variants={{
          initial: {
            opacity: 0,
            scale: 0.95,
            y: 20,
          },
          animate: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
              duration: 0.8,
              staggerChildren: 0.1,
              delayChildren: 0.2,
            },
          },
        }}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
          amount: "some",
        }}
        className="mx-auto max-w-4xl grid grid-cols-12 gap-4 grid-flow-dense"
      >
        <ProjectBlock />
        <ProjectLibBlock />
        <AboutBlock />
        <GridBlock />
        <SpotifyBlock />
        <TechStackBlock />
      </motion.div>
    </div>
  );
};

export default Bento;
