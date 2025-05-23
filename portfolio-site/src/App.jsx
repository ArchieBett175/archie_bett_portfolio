import { IoHome, IoDocument } from "react-icons/io5";
import { FaInfoCircle } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa6";
import Tooltip from "./components/Tooltip/Tooltip";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

function App() {
  const [showHomeTooltip, setShowHomeTooltip] = useState(false);
  const [showAboutTooltip, setShowAboutTooltip] = useState(false);
  const [showProjTooltip, setShowProjTooltip] = useState(false);
  const [showBlogTooltip, setShowBlogTooltip] = useState(false);

  return (
    <>
      <div className="flex-col background h-screen">
        <div className="h-1/12"></div>
        <nav className="">
          <ul
            className="flex justify-between justify-self-center w-60
          bg-gradient-to-r from-purple-500/30 via-red-500/30 to-yellow-500/30 
          p-4 rounded-4xl drop-shadow-xl"
          >
            <div className="homeLink">
              <AnimatePresence>
                {showHomeTooltip && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ y: "-75%", opacity: 1 }}
                    exit={{ y: "0%", opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="absolute bg-white rounded-3xl px-3 py-1 font-roboto text-center top-[-20px] ml-[-20px]"
                  >
                    Home
                  </motion.p>
                )}
              </AnimatePresence>
              <li
                onMouseEnter={() => setShowHomeTooltip(true)}
                onMouseLeave={() => setShowHomeTooltip(false)}
              >
                <motion.div
                  whileHover={{ scale: 1.4 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <IoHome className="size-7 text-white" />
                </motion.div>
              </li>
            </div>
            <div className="aboutLink">
              <AnimatePresence>
                {showAboutTooltip && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ y: "-75%", opacity: 1 }}
                    exit={{ y: "0%", opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="absolute bg-white rounded-3xl px-3 py-1 font-roboto text-center top-[-20px] ml-[-22px]"
                  >
                    About
                  </motion.p>
                )}
              </AnimatePresence>
              <li
                onMouseEnter={() => setShowAboutTooltip(true)}
                onMouseLeave={() => setShowAboutTooltip(false)}
              >
                <motion.div
                  whileHover={{ scale: 1.4 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaInfoCircle className="size-7 text-white" />
                </motion.div>
              </li>
            </div>
            <div className="projLink">
              <AnimatePresence>
                {showProjTooltip && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ y: "-75%", opacity: 1 }}
                    exit={{ y: "0%", opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="absolute bg-white rounded-3xl px-3 py-1 font-roboto text-center top-[-20px] ml-[-28px]"
                  >
                    Projects
                  </motion.p>
                )}
              </AnimatePresence>
              <li
                onMouseEnter={() => setShowProjTooltip(true)}
                onMouseLeave={() => setShowProjTooltip(false)}
              >
                <motion.div
                  whileHover={{ scale: 1.4 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaBriefcase className="size-7 text-white " />
                </motion.div>
              </li>
            </div>
            <div className="blogLink">
            <AnimatePresence>
                {showBlogTooltip && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ y: "-75%", opacity: 1 }}
                    exit={{ y: "0%", opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="absolute bg-white rounded-3xl px-3 py-1 font-roboto text-center top-[-20px] ml-[-16px]"
                  >
                    Blog
                  </motion.p>
                )}
              </AnimatePresence>
              <li
                onMouseEnter={() => setShowBlogTooltip(true)}
                onMouseLeave={() => setShowBlogTooltip(false)}
              >
                <motion.div
                  whileHover={{ scale: 1.4 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <IoDocument className="size-7 text-white " />
                </motion.div>
              </li>
            </div>
          </ul>
        </nav>
        <div className="h-1/6"></div>
        <div className="flex text-white">
          <div className="w-1/4"></div>
          <div className="flex-col">
            <div className="flex">
              <h1 className="font-roboto font-display text-5xl ">Hi I'm</h1>
              <h1 className="font-roboto font-display text-5xl ml-3.5 italic">
                Archie
              </h1>
            </div>
            <h1 className="font-roboto font-display text-5xl">
              A Front-End Web Developer
            </h1>
            <p className="font-roboto opacity-40 mt-5">
              Recent Interactive Media Graduate Based In London, UK
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
