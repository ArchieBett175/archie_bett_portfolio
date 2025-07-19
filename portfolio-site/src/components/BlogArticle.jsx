import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { hover, motion } from "motion/react";

const BlogArticle = () => {
  return (
    <motion.div
      className="flex flex-col gap-5 mt-5 hover:cursor-pointer"
      whileHover="hover"
      initial="initial"
    >
      <div className="h-[1px] bg-zinc-500 mx-32 rounded-full">
        <div className="flex gap-10 mt-10">
          <motion.img
            src="#"
            alt="Image for Blog"
            className="size-40 rounded-2xl border-zinc-700 border-2 place-content-center shadow-md"
            variants={{
              initial: { scale: 1 },
              hover: { scale: 1.1 },
            }}
          />

          <div className="flex-col flex my-5 gap-3 justify-between">
            <h1 className="text-2xl text-zinc-200">Placeholder Title</h1>
            <h2 className="text-zinc-500">PlaceHolder short description</h2>
            <div className="flex items-center gap-2 mt-5 font-medium">
              <motion.h2
                className="text-indigo-400"
                variants={{
                  initial: { textDecoration: "none" },
                  hover: { textDecoration: "underline",
                    transition: {duration: 0.2}
                   },
                }}
              >
                Explore
              </motion.h2>
              <FiArrowRight className="self-center mt-0.5 text-indigo-400" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogArticle;
