import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { motion } from "motion/react";
import BlogArticle from "./BlogArticle";
import { useBlog } from "../hooks/useBlog";

const BlogSection = () => {
  const { posts, loading, error } = useBlog();

  return (
    <div className="bg-gradient-to-b from-black to-zinc-700 h-f text-zinc-100 flex-col flex text-xl font-medium items-center"
    id="blog">
      <div className="flex justify-center w-full" id="blog-header">
        <div className="md:w-3/4 w-full">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-zinc-800 border-zinc-700 border w-fit py-2 px-6 rounded-full mx-10 md:mx-0"
          >
            <div className="text-gradient bg-gradient-to-r from-indigo-600 to-purple-500">
              Blog
            </div>
          </motion.div>
          <div className="flex flex-col my-10 md:mx-15 mx-10 gap-4">
            <div className="flex justify-between">
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: "all" }}
                className="wrap-anywhere w-2/4 md:text-5xl text-3xl"
              >
                <h1>Sharing My Thoughts On the Processes</h1>
              </motion.div>
              <motion.button
                initial={{ opacity: 0, y: -50 }}
                whileHover={{ opacity: 90, scale: 1.05 }}
                transition={{ duration: 0.6, ease: "easeInOut", delay: 0.4 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: "all" }}
                className="cursor-pointer border border-zinc-500 rounded-full md:px-10 px-4 py-3 h-fit place-self-center flex items-center opacity-65"
              >
                <div className="">Explore all</div>
                <FiArrowRight className="ml-5 opacity-65" />
              </motion.button>
            </div>
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: "all" }}
              className="text-zinc-500 md:w-3/4 w-full"
            >
              Everything I have been getting up to recently, from software
              development to content creation. Take a look at my experiences
            </motion.h1>
          </div>
        </div>
      </div>

      <div className="flex justify-center w-full">
        <div className="md:w-3/4 w-full">
          <div className="flex-col flex space-y-10 items-center">
            {posts.map((post, index) => (
              <BlogArticle post={post} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
