import { IoHome, IoDocument } from "react-icons/io5";
import { FaInfoCircle } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa6";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { PiReadCvLogoBold } from "react-icons/pi";
import { MdOutlineMailOutline } from "react-icons/md";
import { AnimatePresence, motion } from "motion/react";
import { use, useState } from "react";

function App() {
  const [showHomeTooltip, setShowHomeTooltip] = useState(false);
  const [showAboutTooltip, setShowAboutTooltip] = useState(false);
  const [showProjTooltip, setShowProjTooltip] = useState(false);
  const [showBlogTooltip, setShowBlogTooltip] = useState(false);

  const [showGitTooltip, setShowGitTooltip] = useState(false);
  const [showLinkdinTooltip, setShowLinkdinTooltip] = useState(false);
  const [showMailTooltip, setShowMailTooltip] = useState(false);
  const [showCVTooltip, setShowCVTooltip] = useState(false);

  const [selected, setSelected] = useState("experience");

  return (
    <>
      <div className="flex-col background h-screen">
        <div className="h-1/12"></div>
        <nav className="navbar">
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
                  className="cursor-pointer"
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
                  className="cursor-pointer"
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
                  className="cursor-pointer"
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
                  className="cursor-pointer"
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
            <div className="mt-12">
              <h1 className="font-roboto font-light opacity-40">
                Let's Connect ...
              </h1>
              <ul className="flex gap-3 mt-2 connect-keys">
                <div className="rotate-x-30 gitHubBut">
                  <AnimatePresence>
                    {showGitTooltip && (
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ y: "-75%", opacity: 1 }}
                        exit={{ y: "0%", opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="absolute text-black bg-white rounded-3xl 
                        px-3 py-1 font-roboto text-center top-[-20px] ml-[-5px]"
                      >
                        Github
                      </motion.p>
                    )}
                  </AnimatePresence>
                  <li
                    className="h-15 w-15 cursor-pointer select-none rounded-lg
                    border-b-2 border-zinc-700 bg-zinc-600 transition-all 
                    duration-150 [box-shadow:0_10px_0_0_#414145] active:translate-y-2
                    active:border-b-0 active:[box-shadow:0_0px_0_0_#414145, 0_0px_0_0_#38383d]"
                    onMouseEnter={() => setShowGitTooltip(true)}
                    onMouseLeave={() => setShowGitTooltip(false)}
                  >
                    <span
                      className="flex h-full flex-col items-center justify-center
                      text-lg font-medium text-gray-100"
                    >
                      <FiGithub className="size-10" />
                    </span>
                  </li>
                </div>
                <div className="rotate-x-30 linkedInBut">
                  <AnimatePresence>
                    {showLinkdinTooltip && (
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ y: "-75%", opacity: 1 }}
                        exit={{ y: "0%", opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="absolute bg-white rounded-3xl px-3 py-1 text-black
                        font-roboto text-center top-[-20px] ml-[-13px]"
                      >
                        LinkedIn
                      </motion.p>
                    )}
                  </AnimatePresence>
                  <li
                    className="h-15 w-15 cursor-pointer select-none rounded-lg
                    border-b-2 border-zinc-700 bg-zinc-600 transition-all 
                    duration-150 [box-shadow:0_10px_0_0_#414145] active:translate-y-2
                    active:border-b-0 active:[box-shadow:0_0px_0_0_#414145, 0_0px_0_0_#38383d]"
                    onMouseEnter={() => setShowLinkdinTooltip(true)}
                    onMouseLeave={() => setShowLinkdinTooltip(false)}
                  >
                    <span
                      className="flex h-full flex-col items-center justify-center
                      text-lg font-medium text-gray-100"
                    >
                      <FiLinkedin className="size-10" />
                    </span>
                  </li>
                </div>
                <div className="rotate-x-30 mailBut">
                  <AnimatePresence>
                    {showMailTooltip && (
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ y: "-75%", opacity: 1 }}
                        exit={{ y: "0%", opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="absolute bg-white rounded-3xl px-3 py-1 text-black
                        font-roboto text-center top-[-20px] ml-[0]"
                      >
                        Email
                      </motion.p>
                    )}
                  </AnimatePresence>
                  <li
                    className="h-15 w-15 cursor-pointer select-none rounded-lg
                    border-b-2 border-zinc-700 bg-zinc-600 transition-all 
                    duration-150 [box-shadow:0_10px_0_0_#414145] active:translate-y-2
                    active:border-b-0 active:[box-shadow:0_0px_0_0_#414145, 0_0px_0_0_#38383d]"
                    onMouseEnter={() => setShowMailTooltip(true)}
                    onMouseLeave={() => setShowMailTooltip(false)}
                  >
                    <span
                      className="flex h-full flex-col items-center justify-center
                      text-lg font-medium text-gray-100"
                    >
                      <MdOutlineMailOutline className="size-10" />
                    </span>
                  </li>
                </div>
                <div className="rotate-x-30 cvBut">
                  <AnimatePresence>
                    {showCVTooltip && (
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ y: "-75%", opacity: 1 }}
                        exit={{ y: "0%", opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="absolute bg-white rounded-3xl px-3 py-1 text-black
                        font-roboto text-center top-[-20px] ml-[7px]"
                      >
                        CV
                      </motion.p>
                    )}
                  </AnimatePresence>
                  <li
                    className="h-15 w-15 cursor-pointer select-none rounded-lg
                    border-b-2 border-zinc-700 bg-zinc-600 transition-all 
                    duration-150 [box-shadow:0_10px_0_0_#414145] active:translate-y-2
                    active:border-b-0 active:[box-shadow:0_0px_0_0_#414145, 0_0px_0_0_#38383d]"
                    onMouseEnter={() => setShowCVTooltip(true)}
                    onMouseLeave={() => setShowCVTooltip(false)}
                  >
                    <span
                      className="flex h-full flex-col items-center justify-center
                      text-lg font-medium text-gray-100"
                    >
                      <PiReadCvLogoBold className="size-10" />
                    </span>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>
        <div className="h-1/6"></div>
        <div className="text-white font-roboto flex justify-center h-200 bg-black">
          <div
            className="h-15/16 w-3/4 flex justify-center shadow-[0_0_50px_10px_rgba(59,59,59,0.75)]
          rounded-[3rem] bg-neutral-950"
          >
            <div className="relative flex w-fit items-center bg-black h-fit mt-2 rounded-full">
              <div
                className="px-3 py-2 rounded-full z-10 relative"
                onClick={() => setSelected("experience")}
              >
                <button>Experience</button>
              </div>
              <div
                className="px-3 py-2 rounded-full z-10 relative"
                onClick={() => setSelected("education")}
              >
                <button>Education</button>
              </div>

              <div
                className={`absolute inset-0 z-0 flex ${
                  selected === "experience" ? "justify-start" : "justify-end"
                }`}>
                <motion.span
                layout
                transition={{ type: "spring", damping:15, stiffness:300 }}
                className="h-full w-1/2 rounded-full bg-gray-500">
                  
                </motion.span>
              </div>


            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
