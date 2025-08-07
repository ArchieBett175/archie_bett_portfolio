import Footer from "../components/Footer";
import { motion } from "motion/react";
import BgImage from "../components/BgImage";
import { useBlog } from "../hooks/useBlog";
import BlogArticle from "../components/BlogArticle";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

const BlogList = () => {
  const { posts, loading, error } = useBlog();
  return (
    <>
      <BgImage
        gradientPosition="50% 80%"
        className="flex flex-col items-center"
      >
        <Link to={"/"} className=" absolute left-0 top-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.4 }}
            whileHover={{ scale: 1.1, color: "#ffffff" }}
            className="text-4xl text-zinc-200 p-10 flex gap-2"
          >
            <FiArrowLeft />
            <h1 className="mt-0.5 text-2xl">Back To Home</h1>
          </motion.div>
        </Link>
        <div className="mt-50 mb-30 ">
          <div className="flex justify-center w-full " id="blog-header">
            <div className=" w-full">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-zinc-800 border-zinc-700 border w-fit py-2 px-6 rounded-full mx-10 md:mx-0"
              >
                <div className="bg-gradient-to-r from-indigo-600 to-purple-500 bg-clip-text text-transparent">
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
                    className="wrap-anywhere w-3/4 md:text-6xl text-3xl"
                  >
                    <h1>Sharing My Thoughts On the Processes</h1>
                  </motion.div>
                </div>
                <motion.h1
                  initial={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.6, ease: "easeInOut", delay: 0.8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: "all" }}
                  className="text-zinc-500  w-full"
                >
                  Everything I have been getting up to recently, from software
                  development to content creation. Take a look at my experiences
                </motion.h1>
              </div>
            </div>
          </div>
          <div className="flex justify-center w-full mx-auto">
            <div className=" w-full">
              <div className="flex-col flex space-y-10 items-center">
                {posts.map((post, index) => (
                  <BlogArticle post={post} key={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </BgImage>
      <Footer />
    </>
  );
};

export default BlogList;
