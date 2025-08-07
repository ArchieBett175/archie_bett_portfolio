import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft, FiGithub } from "react-icons/fi";
import Footer from "../components/Footer";
import { motion } from "motion/react";
import Carousel from "../components/Carousel";
import ImageCarouselItem from "../components/ImageCarouselItem";
import ConnectButton from "../components/ConnectButton";

const cccShots = [
  {
    id: "1",
    imageLink: "/images/project-images/ccc/screen_shots/1.png",
    altText: "Screenshot of the Code Caffine Collapse main menu interface",
  },
  {
    id: "2",
    imageLink: "/images/project-images/ccc/screen_shots/2.png",
    altText:
      "Screenshot showing the player character in a 3D office environment",
  },
  {
    id: "3",
    imageLink: "/images/project-images/ccc/screen_shots/3.png",
    altText: "Screenshot of a coding challenge scene in Code Caffine Collapse",
  },
  {
    id: "4",
    imageLink: "/images/project-images/ccc/screen_shots/4.png",
    altText: "Screenshot displaying a coffee break area in the game",
  },
  {
    id: "5",
    imageLink: "/images/project-images/ccc/screen_shots/5.png",
    altText: "Screenshot of a dialogue interaction with a coworker character",
  },
  {
    id: "6",
    imageLink: "/images/project-images/ccc/screen_shots/6.png",
    altText:
      "Screenshot showing the player navigating through a busy workspace",
  },
  {
    id: "7",
    imageLink: "/images/project-images/ccc/screen_shots/7.png",
    altText: "Screenshot of a game over screen in Code Caffine Collapse",
  },
  {
    id: "8",
    imageLink: "/images/project-images/ccc/screen_shots/8.png",
    altText: "Screenshot displaying a leaderboard or score summary",
  },
  {
    id: "9",
    imageLink: "/images/project-images/ccc/screen_shots/9.png",
    altText: "Screenshot of a settings or options menu in the game",
  },
  {
    id: "10",
    imageLink: "/images/project-images/ccc/screen_shots/10.png",
    altText:
      "Screenshot showing a cutscene or story event in Code Caffine Collapse",
  },
];

const CodeCaffineCollapse = () => {
  return (
    <>
      <div className="bg-black h-fit w-full background_three justify-center flex">
        <Link to={"/projects"} className=" absolute left-0 top-0">
          <motion.div
            initial={{ scale: 1, color: "#9f9f9f" }}
            whileHover={{ scale: 1.1, color: "#ffffff" }}
            className="text-4xl text-zinc-200 p-10 flex gap-2"
          >
            <FiArrowLeft />
            <h1 className="mt-0.5 text-2xl">Back To Projects</h1>
          </motion.div>
        </Link>
        <div className="md:w-3/5 w-full flex flex-col  mt-30 text-zinc-100 gap-15 mx-10 md:mx-0 mb-10">
          <h1 className="text-2xl text-zinc-300 font-bold">
            2023 - First Class Grade Received
          </h1>
          <div className="-mt-10 relative">
            <img
              src="/images/project-images/ccc/Code_Caffeine_Collapse_cover.png"
              alt="A large cover image of the code caffine collapse cover screen"
              className="w-full h-50 object-cover rounded-2xl shadow-[1px_1px_29px_14px_rgba(252,54,219,0.3)]"
            />
            <h1 className="absolute bottom-2 left-2 opacity-30 text-sm">
              Main Menu developed by Sara Nadeem
            </h1>
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="text-6xl font-roboto font-medium">
              Code Caffine Collapse
            </h1>
            <div className="flex flex-col gap-2 text-xl text-zinc-400s">
              <h2>
                A 3D Experience showcasing the harsh reality of developer life
                in the modern tech industry
              </h2>
              <h2>
                Credit to: Joe Hutchinson, Sara Nadeem, Bryan Cooper and Yuetong
                Lu for their contributions{" "}
              </h2>
            </div>
            <hr />
          </div>
          <div className="w-full flex flex-col mx-auto">
            <div className="w-400 max-w-2xl mx-auto">
              <Carousel
                isVisible={true}
                items={cccShots}
                carouselItem={ImageCarouselItem}
              />
            </div>
            <p className="text-center text-lg- mt-10">
              Here are a few gameplay shots from Code Caffine Collapse
              showcasing the basic scenes of the game, if you would like to
              watch a full gameplay walkthrough see the video linked below.
              Alternatively you can check out the github repo by clicking the
              little button below.
            </p>
            <div className="flex flex-col gap-5 list-none mx-auto my-10 items-center">
              <ConnectButton
                icon={<FiGithub className="size-10" />}
                infoTag={"Repo"}
                marLeft={"ml-[-2px]"}
                dest={"https://github.com/JoeHutchJ/CodeCaffeineCollapse"}
              />
              <p className="text-xs text-zinc-500">
                Please note i was using a different github account at the time,
                which i have since lost access to unfortunately :({" "}
              </p>
            </div>
            <iframe
              src="https://www.youtube.com/embed/D8WNLURRhTY"
              frameborder="4"
              width="720"
              height="360"
              className="mx-auto my-10"
              loading="eager"
            />
            <hr />
          </div>

          <div>
            <h1 className="text-3xl font-roboto font-semibold mb-5">
              Development
            </h1>
            <div className="flex flex-col gap-5 text-lg">
              <p>
                Code Caffeine Collapse is a group Unity 3D project which stems
                from the idea of overworking and immense pressure inside the
                Software development world.
              </p>
              <p>
                You take the role of an overworked developer trying to get
                through the week by meeting a daily task quota. You are assigned
                tasks such as: Code reviews, development, writing reports,
                printing etc.{" "}
              </p>
              <p>
                The experience is set in First Person in a cramped office, with
                interaction points such as the player's computer, the coffee
                machine, printer, authentication cards, and other desks.
              </p>
              <p>
                The game has a major focus on coffee and mundane repetitive
                tasks, whilst overworking yourself to reach unachievable goals.
                There are text interactions and email tasks to complete
                throughout the experience.{" "}
              </p>
            </div>
            <hr className="mt-15" />
          </div>
          <div>
            <h1 className="text-3xl font-roboto font-semibold mb-5">
              Self Reflection
            </h1>

            <div className="flex flex-col gap-5 text-lg mb-15">
              <p>
                In this project I took the role of head of technical, something
                which excited me as I loved the development side of things and
                was no good at designing 3D assets. From this experience I
                enjoyed the support I gained from working in a team, as it
                allowed me to ask questions and get feedback on my code from
                other experienced members of the team.
              </p>
              <p>
                I thoroughly enjoyed developing this project due to the team
                working and collaboration nature it brought with it.{" "}
              </p>
              <p>
                I was also proud as it was displayed at the Interactive Media
                Showcase, an event which brings some of the best projects of the
                year from the interactive media department at the university of
                york to the public scope, an event which gains huge traction at
                the university and brings in on average 300+ people. You can
                view the link to the page{" "}
                <span className="text-blue-500 underline hover:text-amber-300">
                  {" "}
                  <a
                    href="https://2023.imshowcase.co.uk/projects/code-caffeine-collapse/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    here
                  </a>
                </span>
              </p>
            </div>
            <hr />
          </div>
          <p>
            Thanks for being so interested in my work, if you would like to
            contact me you can do so{" "}
            <span className="text-blue-500 underline hover:text-amber-300">
              {" "}
              <Link to={"/"}> here</Link>
            </span>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CodeCaffineCollapse;
