import { FiArrowRight } from "react-icons/fi";
import { motion } from "motion/react";
import Reveal from "./reveal";

const BlogArticle = ({ post }) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-GB", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <Reveal width="w-full">
      <motion.div
        className="flex flex-col gap-5 hover:cursor-pointer my-5 md:w-full w-3/4"
        whileHover="hover"
        initial="initial"
      >
        <div className="h-[1px] bg-zinc-500 rounded-full" />

        <div className="flex md:flex-row flex-col gap-10 mt-5 items-center md:items-start ">
          <motion.img
            src={post.coverImage}
            alt="Image for Blog"
            className="size-60 md:size-40 rounded-2xl border-zinc-700 border-2 place-content-center shadow-md"
            variants={{
              initial: { scale: 1 },
              hover: { scale: 1.1 },
            }}
          />
          <div className="flex-col flex my-2 gap-2 justify-between text-center md:text-start">
            <h1 className="text-sm text-zinc-600">{formatDate(post.date)}</h1>
            <h1 className="text-2xl text-zinc-200">{post.title}</h1>
            <h2 className="text-zinc-500">{post.excerpt}</h2>
            <div className="flex items-center justify-end md:justify-start gap-2 mt-5 font-medium">
              <motion.h2
                className="text-indigo-400"
                variants={{
                  initial: { textDecoration: "none" },
                  hover: {
                    textDecoration: "underline",
                    transition: { duration: 0.2 },
                  },
                }}
              >
                Explore
              </motion.h2>
              <FiArrowRight className="self-center mt-0.5 text-indigo-400" />
            </div>
          </div>
        </div>
      </motion.div>
    </Reveal>
  );
};

export default BlogArticle;
