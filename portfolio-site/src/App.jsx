import { IoHome, IoDocument } from "react-icons/io5";
import { FaInfoCircle } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa6";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { PiReadCvLogoBold } from "react-icons/pi";
import { MdOutlineMailOutline } from "react-icons/md";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import ocadoLogo from "./assets/ocado-logo.png";
import asdaLogo from "./assets/asda-logo.png";
import welcomeBreakLogo from "./assets/Welcome_Break_logo.svg";
import yorkLogo from "./assets/uni_york_logo.png";
import chancellorsLogo from "./assets/chancellors_sch_logo.png";

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
          {/* code for entire exp block */}
          <div
            className="h-15/16 w-3/4 flex-col place-items-center shadow-[0_0_50px_10px_rgba(59,59,59,0.75)]
          rounded-[3rem] bg-neutral-950"
          >
            {/* switch button */}
            <div className="relative flex w-fit bg-black h-fit mt-6 rounded-full">
              <div
                className="px-3 py-2 rounded-full z-10 relative cursor-pointer"
                onClick={() => setSelected("experience")}
              >
                <button className="cursor-pointer">Experience</button>
              </div>
              <div
                className="px-3 py-2 rounded-full z-10 relative cursor-pointer"
                onClick={() => setSelected("education")}
              >
                <button className="cursor-pointer">Education</button>
              </div>

              <div
                className={`absolute inset-0 z-0 flex ${
                  selected === "experience" ? "justify-start" : "justify-end"
                }`}
              >
                <motion.span
                  layout
                  transition={{ type: "spring", damping: 15, stiffness: 300 }}
                  className="h-full w-1/2 rounded-full bg-gray-500"
                ></motion.span>
              </div>
            </div>
            <div className="w-full h-1 bg-neutral-500 mt-5 -mb-0.5"></div>
            {/* Code for Experience part of experience block */}
            <div
              className={`w-7/8 h-5/6 exp ${
                selected === "experience"
                  ? "opacity-100"
                  : "opacity-0 absolute top-0 -z-10"
              }`}
            >
              <div className="w-1 h-1/7 border-2 border-neutral-500 rounded-full ml-9.5"></div>

              <div className="flex w-full h-1/10">
                <div className="size-20 absolute -mt-1">
                  <img src={ocadoLogo} alt="logo from Ocado "></img>
                </div>
                <div className="w-1/6"></div>
                <div className="flex-col -mt-2 w-5/6">
                  <p className="text-xs opacity-30">Sept 2024 - Present</p>
                  <h1>Customer Service Team Member</h1>
                  <p className="text-xs opacity-30">Ocado Logistics</p>
                  <p className="text-sm">
                    - Maxmised sales with thorough knowledge of over 50,000+
                    products maximising sales up 9.5% over the seasonal period
                  </p>
                  <p className="text-sm">
                    - Ensured high levels of communiacation providing
                    outstanding customer service and gaining 100% on multiple
                    customer feedback forms
                  </p>
                </div>
              </div>

              <div className="w-1 h-1/5 border-2 border-neutral-500 rounded-full ml-9.5 "></div>

              <div className="flex w-full h-1/10">
                <div className="size-20 bg-white rounded-full flex justify-center absolute -mt-1">
                  <img
                    src={asdaLogo}
                    alt="Logo from Asda"
                    className="size-19"
                  />
                </div>
                <div className="w-1/6"></div>
                <div className="flex-col -mt-2 w-5/6">
                  <p className="text-xs opacity-30">Febr 2023 - July 2024</p>
                  <h1>Home Delivery Driver</h1>
                  <p className="text-xs opacity-30">Asda Stores Limited</p>
                  <p className="text-sm">
                    - Delivered high quality service to up to 20 customers per
                    shift
                  </p>
                  <p className="text-sm">
                    - Tackled multiple issues on shift in dynamic enviroments,
                    built strong customer relations developing brand image
                  </p>
                </div>
              </div>

              <div className="w-1 h-1/5 border-2 border-neutral-500 rounded-full ml-9.5 "></div>

              <div className="flex w-full h-1/10">
                <div className="size-20  bg-[#272a2b] rounded-full flex justify-center absolute -mt-1">
                  <img
                    src={welcomeBreakLogo}
                    alt="image of welcome break logo"
                    className="size-19"
                  />
                </div>
                <div className="w-1/6"></div>
                <div className="flex-col -mt-2 w-5/6">
                  <p className="text-xs opacity-30">July 2021 - Sept 2023</p>
                  <h1>Team Member</h1>
                  <p className="text-xs opacity-30">Welcome Break </p>
                  <p className="text-sm">
                    - Took deliveries of over 5000+ items ensuring correct
                    quality and proper rotation, resulting in sales upwards of
                    £15000 a day
                  </p>
                  <p className="text-sm">
                    - Took Leadership roles to ensure quality of product and
                    customer satisfaction, whilst coming face to face with over
                    300 customers daily
                  </p>
                </div>
              </div>

              <div className="w-1 h-1/7 border-2 border-neutral-500 rounded-full ml-9.5 "></div>
            </div>
            {/* Code for education part of expierience */}
            <div
              className={`w-7/8 h-5/6 edu ${
                selected === "education"
                  ? "opacity-100"
                  : "opacity-0 absolute top-0 -z-10"
              }`}
            >
              <div className="w-1 h-1/7 border-2 border-neutral-500 rounded-full ml-9.5"></div>

              <div className="flex w-full h-1/10">
                <div className="size-20 absolute -mt-1 bg-white rounded-full flex justify-center items-center">
                  <img
                    src={yorkLogo}
                    alt="logo from University of York "
                    className="w-19 h-10"
                  ></img>
                </div>
                <div className="w-1/6"></div>
                <div className="flex-col -mt-2 w-5/6">
                  <p className="text-xs opacity-30">Sept 2021 - July 2024</p>
                  <h1>BSc Interactive Media - 2:1</h1>
                  <p className="text-xs opacity-30">University Of York</p>
                  <p className="text-sm">
                    Modules Include: UX Design, Computational Thinking
                    (Object-Oriented Programming), Web Application Design,
                    Mobile Interaction, Business in interactive media, Adobe
                    Creative Suite Design, Advanced interaction techniques and
                    technologies
                  </p>
                </div>
              </div>

              <div className="w-1 h-1/5 border-2 border-neutral-500 rounded-full ml-9.5"></div>

              <div className="flex w-full h-1/10">
                <div className="size-20 bg-white rounded-full flex justify-center items-center absolute -mt-1">
                  <img
                    src={chancellorsLogo}
                    alt="Logo from Asda"
                    className="size-15 mt-2"
                  />
                </div>
                <div className="w-1/6"></div>
                <div className="flex-col -mt-2 w-5/6">
                  <p className="text-xs opacity-30">Sept 2019 - July 2021</p>
                  <h1>A-Levels</h1>
                  <p className="text-xs opacity-30">Chancellor's School</p>
                  <p className="text-sm">
                    A-Levels in: Business Studies(A) | Film Studies(A) |
                    Computer Science(B)
                  </p>
                </div>
              </div>

              <div className="w-1 h-1/5 border-2 border-neutral-500 rounded-full ml-9.5 "></div>

              <div className="flex w-full h-1/10">
                <div className="size-20  bg-white rounded-full flex justify-center items-center absolute -mt-1">
                  <img
                    src={chancellorsLogo}
                    alt="image of welcome break logo"
                    className="size-15 mt-2"
                  />
                </div>
                <div className="w-1/6"></div>
                <div className="flex-col -mt-2 w-5/6">
                  <p className="text-xs opacity-30">Sept 2014 - July 2019</p>
                  <h1>GCSEs</h1>
                  <p className="text-xs opacity-30">Chancellor's School</p>
                  <p className="text-sm">
                    GCSEs in: Computer Science | Media Studies | History | Maths
                    | English Liturature | English Language | Combined Science |
                    German
                  </p>
                </div>
              </div>

              <div className="w-1 h-1/7 border-2 border-neutral-500 rounded-full ml-9.5 "></div>
            </div>
            <div className="w-full h-1 bg-neutral-500 -mt-3"></div>
          </div>
        </div>
        {/* Div for Bento Grid */}
        <div className="h-screen w-full flex items-center justify-center bg-black">
          <div
            className=" w-[1164px] auto-rows-[minmax(0,1fr)]
              grid-cols-10 gap-3 p-10
              flex-col 
              max-lg:grid-cols-8
              md:grid max-md:flex max-md:gap-4 aspect-12/10
              "
          >
            <div
              className="col-start-1 col-end-4 row-start-1 row-end-4 bg-red-500 
            rounded-3xl aspect-square"
            ></div>
            <div
              className="col-start-1 col-end-4 row-start-4 row-end-5
            rounded-3xl grid grid-cols-3 gap-3 "
            >
              <div className="col-span-1 bg-blue-400 rounded-3xl aspect-square"></div>
              <div className="col-span-1 bg-blue-500 rounded-3xl aspect-square"></div>
              <div className="col-span-1 bg-blue-600 rounded-3xl aspect-square"></div>
            </div>
            <div
              className="col-start-6 col-end-11 row-start-1 row-end-4 bg-amber-700 
            rounded-3xl max-lg:col-start-4 max-lg:col-end-9 aspect-12/7"
            ></div>
            <div
              className="col-start-6 col-end-11 row-start-4 row-end-5 bg-stone-700 
            rounded-3xl max-lg:col-start-4 max-lg:col-end-9 aspect-22/4"
            ></div>
            <div
              className="col-start-4 col-end-6 row-start-1 row-end-3 bg-purple-600 
            rounded-3xl max-lg:col-start-1 max-lg:col-end-5 max-lg:row-start-5 
            max-lg:row-end-7 lg:aspect-square aspect-19/9"
            ></div>
            <div
              className="col-start-4 col-end-6 row-start-3 row-end-5 bg-slate-700
            rounded-3xl max-lg:col-start-5 max-lg:col-end-9 max-lg:row-start-8 
            max-lg:row-end-10 lg:aspect-square aspect-19/9"
            ></div>
            <div
              className="col-start-1 col-end-6 row-start-5 row-end-8 bg-green-500 
            rounded-3xl max-lg:col-end-5 max-lg:row-start-7 max-lg:row-end-10
            aspect-19/11
            "
            ></div>
            <div
              className="col-start-6 col-end-11 row-start-5 row-end-8 bg-pink-700 
            rounded-3xl max-lg:col-start-5 max-lg:col-end-9 aspect-19/11"
            ></div>
            <div
              className="col-start-1 col-end-11 row-start-8 row-end-9 bg-cyan-700 
            rounded-3xl max-lg:col-end-9 max-lg:row-start-10 max-lg:row-end-11 aspect-45/4"
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
