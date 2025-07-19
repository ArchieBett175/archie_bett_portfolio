import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { motion } from "motion/react";
import BlogArticle from "./BlogArticle";

const BlogSection = () => {
  return (
    <div className="bg-gradient-to-b from-black to-zinc-700 h-full text-zinc-100 flex-col text-xl font-medium items-center">
      <div className="flex justify-center w-full" id="blog-header">
        <div className="w-3/4">
          <div className="bg-zinc-800 border-zinc-700 border w-fit py-2 px-6 rounded-full">
            <div className="text-gradient bg-gradient-to-r from-indigo-600 to-purple-500">
              Blog
            </div>
          </div>
          <div className="flex flex-col my-10 mx-15 gap-4">
            <div className="flex justify-between">
              <div className="wrap-anywhere w-2/4 text-5xl">
                <h1>Sharing My Thoughts On the Processes</h1>
              </div>
              <motion.button
                whileHover={{ opacity: 90, scale: 1.05 }}
                className="cursor-pointer border border-zinc-500 rounded-full px-10 py-3 h-fit place-self-center flex items-center opacity-65"
              >
                <div className="">Explore all</div>
                <FiArrowRight className="ml-5 opacity-65" />
              </motion.button>
            </div>
            <h1 className="text-zinc-500 w-3/4">
              Everything I have been getting up to recently, from software
              development to content creation. Take a look at my experiences
            </h1>
          </div>
        </div>
      </div>
      <BlogArticle />
    </div>
  );
};

export default BlogSection;
