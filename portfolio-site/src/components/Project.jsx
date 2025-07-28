import React from "react";
import Reveal from "./Reveal";
import { motion } from "motion/react";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const Project = ({ project }) => {
  return (
    <Reveal width="w-full">
      <motion.div
        className="flex flex-col gap-5 hover:cursor-pointer my-5 w-full max-w-sm md:max-w-none mx-auto"
        whileHover="hover"
        initial="initial"
      >
        <div className="h-[1px] bg-zinc-500 rounded-full" />

        <Link to={project.link}>
          <div className="flex md:flex-row flex-col gap-10 mt-5 items-center md:items-start ">
            <motion.img
              src={project.coverImage}
              alt="Image for Blog"
              className="size-60 md:size-40 rounded-2xl border-zinc-700 border-2 place-content-center object-cover shadow-md ml-3"
              variants={{
                initial: { scale: 1 },
                hover: { scale: 1.1 },
              }}
            />
            <div className="flex-col flex my-1 gap-2 justify-between text-center md:text-start">
              <h1 className="text-2xl text-zinc-200">{project.title} </h1>
              <h2 className="text-zinc-500">{project.excerpt}</h2>
              <div className="flex gap-3">
                {project.tags.map((tag, index) => (
                  <div key={index} className="py-1 px-3 bg-zinc-800 rounded-xl">
                    <p>{tag}</p>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-end md:justify-start gap-2 mt-5 font-medium">
                <motion.h2
                  variants={{
                    initial: { textDecoration: "none" },
                    hover: {
                      textDecoration: "underline",
                      transition: { duration: 0.2 },
                    },
                  }}
                  className="text-indigo-400 text-2xl"
                >
                  Explore
                </motion.h2>
                <FiArrowRight className="self-center mt-0.5 text-indigo-400" />
              </div>
            </div>
          </div>
        </Link>
      </motion.div>
    </Reveal>
  );
};

export default Project;
