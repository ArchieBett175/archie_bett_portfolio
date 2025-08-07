import React, { useEffect, useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { twMerge } from "tailwind-merge";
import { animate, delay, motion, scale } from "motion/react";
import TerrTieLogo from "../assets/TerraceTiesLogo.png";
import CCCLogo from "../assets/cccLogo.png";
import portfolioScrnShot from "../assets/portfolioScrnShot.png";
import "../index.css";
import GitHubCalendar from "react-github-calendar";
import {
  FaFigma,
  FaGithub,
  FaJava,
  FaJsSquare,
  FaNodeJs,
  FaPython,
  FaReact,
  FaSpotify,
  FaUnity,
} from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { SiAdobe, SiBlender, SiKotlin, SiPostgresql } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";
import { Link } from "react-router-dom";

const Block = ({ className, ...rest }) => {
  return (
    <motion.div
      variants={{
        initial: {
          scale: 0.5,
          y: 50,
          opacity: 0,
        },
        animate: {
          scale: 1,
          y: 0,
          opacity: 1,
          transition: {
            type: "spring",
            stiffness: 100,
            damping: 15,
          },
        },
      }}
      className={twMerge(
        "col-span-4 rounded-lg border border-zinc-700 bg-zinc-800 p-6",
        className
      )}
      {...rest}
    />
  );
};

const ProjectBlock = () => {
  return (
    <Block
      className="col-span-12 row-span-2 md:col-span-6 bg-gradient-to-r from-green-900 via-emerald-800 to-green-800"
      id="projects"
    >
      <img
        src={TerrTieLogo}
        alt="avatar"
        className="mb-4 size-14 rounded-full shadow-lg"
      />
      <h1 className="mb-4 text-4xl font-medium leading-tight">
        Here's one i'm proud of...{" "}
      </h1>
      <p className="text-zinc-400 text-lg mb-12 leading-5">
        Terrace Ties - the ultimate non-league football hub, built for my final
        year university project making use of API calls, google firebase,
        geolocation services etc.
      </p>
      <Link
        to={"/projects/terraceties"}
        className="flex items-center gap-1 text-red-300 justify-self-end hover:underline"
      >
        Find out More <FiArrowRight />
      </Link>
    </Block>
  );
};

const ProjectLibBlock = () => {
  return (
    <>
      <Block
        whileHover={{
          rotate: "2.5deg",
          scale: 1.1,
        }}
        className="col-span-6 p-2 md:col-span-3"
        style={{
          backgroundImage: `url(${CCCLogo})`,
          backgroundSize: "150% 150%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Link to={"/projects/codecaffinecollapse"}>
          <motion.div
            className="grid h-full items-end opacity-0"
            whileHover={{
              opacity: "100%",
              scale: 1.1,
            }}
          >
            <FiArrowRight className="text-white size-10 rotate-180" />
          </motion.div>
        </Link>
      </Block>

      <Block
        className="col-span-6 md:col-span-3 p-2"
        style={{
          backgroundImage: `url(${portfolioScrnShot})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        whileHover={{
          rotate: "-2.5deg",
          scale: 1.1,
        }}
      >
        <Link to={"/projects/portfolio"}>
          <motion.div
            href="#"
            className="grid h-full items-end justify-end opacity-0"
            whileHover={{ opacity: "100%", scale: 1.1 }}
          >
            <FiArrowRight className="size-10" />
          </motion.div>
        </Link>
      </Block>
      <Block
        whileHover={{
          rotate: "-2.5deg",
          scale: 1.1,
        }}
        className="col-span-6 bg-gradient-to-r from-zinc-50 to-zinc-400 md:col-span-3 p-2 justify-center relative"
      >
        <div className="absolute left-0 right-1 bottom-[30%] md:bottom-[43%]">
          <h1 className="font-medium text-gradient bg-gradient-to-r from-indigo-400 via-purple-500 to-indigo-800 md:text-xl text-md text-center">
            Under Construction
          </h1>
        </div>
        <Link to={"/projects/under-construction"}>
          <motion.div
            href="#"
            className="flex h-full justify-end items-end opacity-0"
            whileHover={{ opacity: "100%", scale: 1.1 }}
          >
            <FiArrowRight className="text-black size-10" />
          </motion.div>
        </Link>
      </Block>
      <Block
        className="col-span-6 bg-gradient-to-l from-zinc-800 to-zinc-600 md:col-span-3 p-2 justify-center relative"
        whileHover={{ rotate: "2.5deg", scale: 1.1 }}
      >
        <div className="absolute left-0 right-2 bottom-[30%] md:bottom-[43%]">
          <h1 className="font-medium text-gradient bg-gradient-to-r from-sky-400 via-blue-300 to-cyan-300 md:text-xl text-md text-center">
            Explore All
          </h1>
        </div>
        <Link to={"/projects"}>
          <motion.div
            href="#"
            className="grid h-full justify-start items-end opacity-0"
            whileHover={{ opacity: "100%", scale: 1.1 }}
          >
            <FiArrowRight className="text-white size-10 rotate-180" />
          </motion.div>
        </Link>
      </Block>
    </>
  );
};

const AboutBlock = () => {
  return (
    <Block
      initial={{ scale: 1.1, y: -40, opacity: 0.5 }}
      animate={{
        scale: 1,
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 100, damping: 15, delay: 0 },
      }}
      className="col-span-12 text-3xl leading-snug"
      id="about"
    >
      <h1 className="mb-3 font-semibold text-gradient bg-gradient-to-r from-indigo-400 via-purple-500 to-indigo-800 md:text-7xl text-6xl ">
        Motivation
      </h1>
      <p>
        Making the code come to life.{" "}
        <span className="text-zinc-400">
          I love building, learning and working with technology. I build with
          <span className="text-zinc-50">
            {" "}
            passion, drive and determination
          </span>{" "}
          to cause real-world impact with my projects, whilst engrossing myself
          and loving the process. I am fascinated by the developing world of
          technology and determined to be
          <span className="text-zinc-50"> involved in the journey.</span>
        </span>
      </p>
    </Block>
  );
};

const selectLastHalfYear = (contributions) => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();
  const shownMonths = 6;

  return contributions.filter((activity) => {
    const date = new Date(activity.date);
    const monthOfDay = date.getMonth();

    return (
      date.getFullYear() === currentYear &&
      monthOfDay > currentMonth - shownMonths &&
      monthOfDay <= currentMonth
    );
  });
};

const GridBlock = () => {
  return (
    <Block
      className="col-span-12 text-3xl md:col-span-6 relative"
      whileHover={{ rotate: "-.5deg", scale: 1.07 }}
    >
      <a
        href="https://github.com/ArchieBett175"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="bg-slate-700 border-4 border-slate-700 rounded-3xl w-fit absolute right-4 top-3">
          <FaGithub className="" />
        </div>
        <div className=" flex justify-center w-full mt-3">
          <GitHubCalendar
            username="ArchieBett175"
            transformData={selectLastHalfYear}
            labels={{
              totalCount: "{{count}} contributions in the last half year",
            }}
          />
        </div>
      </a>
    </Block>
  );
};

const SpotifyBlock = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentlyPlaying, setCurrentlyPlaying] = useState({
    track: null,
    artists: null,
    cover: null,
    trackLink: null,
  });
  const [recentlyPlayed, setRecentlyPlayed] = useState({
    track: null,
    artists: null,
    cover: null,
    trackLink: null,
  });

  async function fetchLastPlayed() {
    try {
      const response = await fetch(
        "/api/spotify-my-recently-played"
      );
      const data = await response.json();
      let dArtists = data.items[0].track.artists;
      setRecentlyPlayed((c) => ({
        track: data.items[0].track.name,
        artists: dArtists.map((n) => n.name),
        cover: data.items[0].track.album.images[0].url,
        trackLink: data.items[0].track.external_urls.spotify,
      }));
      setIsPlaying(false);
    } catch (err) {
      console.error("Error fetching last played:", err);
    }
  }

  useEffect(() => {
    async function fetchCurrentlyPlaying() {
      try {
        const response = await fetch(
          "/api/spotify-my-currently-playing"
        );
        const data = await response.json();
        if (data.is_playing) {
          let dArtists = data.item.artists;
          setCurrentlyPlaying((c) => ({
            track: data.item.name,
            artists: dArtists.map((n) => n.name),
            cover: data.item.album.images[0].url,
            trackLink: data.item.external_urls.spotify,
          }));
          setIsPlaying(true);
        } else {
          fetchLastPlayed();
        }
      } catch (err) {
        console.error("Error fetching currently playing:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchCurrentlyPlaying();

    // return () => {
    //   //cleanup code here
    // };
  }, []);

  const displayTrack = isPlaying ? currentlyPlaying : recentlyPlayed;
  const trackStatus = isPlaying ? "Currently Playing" : "Last Played";

  if (loading)
    return (
      <Block className="h-full w-full flex align-middle justify-center">
        Loading...
      </Block>
    );
  if (error)
    return (
      <Block className="h-full w-full flex align-middle justify-center ">
        Error: {error}
      </Block>
    );

  return (
    <Block
      className="col-span-12 text-2xl md:col-span-6 place-content-center relative"
      whileHover={{ rotate: "-.5deg", scale: 1.07 }}
    >
      {displayTrack ? (
        <a
          href={displayTrack.trackLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex">
            <div className="bg-slate-700 absolute top-4 right-6 border-4 border-slate-700 rounded-3xl">
              <FaSpotify className="" />
            </div>
            <img
              src={displayTrack.cover}
              alt={`Album Art of ${displayTrack.track}`}
              className="size-34 border-8 border-zinc-700 rounded-2xl"
            />
            <div className="flex-col ml-7 w-full gap-2">
              <h1 className="text-zinc-400 text-lg mb-2">{trackStatus}</h1>
              <h1>{displayTrack.track}</h1>
              <div className="text-zinc-400">
                {displayTrack.artists?.join(", ")}
              </div>
            </div>
          </div>
        </a>
      ) : (
        <p>Error: {error}</p>
      )}
    </Block>
  );
};

const TechStackBlock = () => {
  const techStack = [
    <FaReact />,
    <FaJsSquare />,
    <FaPython />,
    <FaNodeJs />,
    <IoLogoFirebase />,
    <SiPostgresql />,
    <RiTailwindCssFill />,
    <FaJava />,
    <SiKotlin />,
    <TbBrandFramerMotion />,
    <FaUnity />,
    <FaFigma />,
    <SiBlender />,
    <SiAdobe />,
  ];

  const duplicatedStack = [...techStack, ...techStack];

  return (
    <Block className="col-span-12 text-3xl w-full overflow-hidden">
      <div className="flex max-w-6xl mx-auto items-center w-full">
        <h1 className="font-semibold text-gradient bg-gradient-to-r from-indigo-400 via-purple-500 to-indigo-800 md:text-4xl text-2xl whitespace-nowrap text-center mb-3">
          Tech Stack
        </h1>

        <div className="ml-5 relative w-full">
          <div className="absolute left-0 top-0 w-18 md:w-48 h-full bg-gradient-to-r from-zinc-800 via-zinc-800/80 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-10 top-0 w-48 h-full bg-gradient-to-l from-zinc-800 via-zinc-800/80 to-transparent z-10 pointer-events-none"></div>

          <div className="overflow-hidden">
            <motion.div
              className="flex gap-8 py-8"
              animate={{
                x: [0, -80 * techStack.length],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear",
                },
              }}
            >
              {duplicatedStack.map((tech, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0 w-12 h-12 flex items-center justify-center"
                  whileHover={{
                    scale: 1.05,
                    y: -5,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }}
                >
                  <div className="text-center">
                    <div className="text-4xl mb-3">{tech}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
      <div className="w-full justify-center flex text-2xl text-zinc-400"></div>
    </Block>
  );
};

//TO-DO - create initial animation on bento when scroll

export {
  Block,
  ProjectBlock,
  AboutBlock,
  ProjectLibBlock,
  GridBlock,
  SpotifyBlock,
  TechStackBlock,
};
