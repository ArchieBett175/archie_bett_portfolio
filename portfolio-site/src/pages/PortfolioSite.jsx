import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import ConnectButton from "../components/ConnectButton";
import Footer from "../components/Footer";
import BgImage from "../components/BgImage";

const PortfolioSite = () => {
  return (
    <>
      <BgImage
        className="bg-black h-fit w-full background_three justify-center flex"
        gradientPosition="50% 100%"
        baseColorVal="80%"
      >
        <Link to={"/projects"} className=" absolute left-0 top-0">
          <motion.div
            initial={{ scale: 1, color: "#9f9f9f", opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ scale: 1.1, color: "#ffffff" }}
            transition={{ delay: 0.1 }}
            className="text-4xl text-zinc-200 p-10 flex gap-2"
          >
            <FiArrowLeft />
            <h1 className="mt-0.5 text-2xl">Back To Projects</h1>
          </motion.div>
        </Link>
        <motion.div
          className="md:w-3/5 w-full flex flex-col mt-30 text-zinc-100 gap-15 mx-10 md:mx-0 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1, ease: "easeInOut" }}
        >
          <h1 className="text-2xl text-zinc-300 font-bold">2025</h1>
          <div className="-mt-10">
            <img
              src="/images/project-images/portfolio/london_skyline.jpg"
              alt="A picture of London skyline from far distance out"
              className="w-full h-50 object-cover rounded-2xl shadow-[1px_1px_29px_14px_rgba(252,54,219,0.3)]"
            />
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="text-6xl font-roboto font-medium">
              My Portfolio Site
            </h1>
            <h2 className="text-xl text-zinc-400">
              A self containted showcase of my previous and current projects. A
              place to show off and reflect on the work i am proud of.
            </h2>
            <hr />
          </div>

          <div className="text-lg flex flex-col gap-5 leading-8">
            <p>
              I like to think of this site as quite a significant project, as
              it's the first time experimenting with react and tailwind and
              making use of other libraries which a year ago I was scared to
              touch. I have learnt so much and developed my skills massively
              since beginning this project when I began applying for jobs.
            </p>
            <p>
              It has motivated me to develop bigger and better things and try my
              hand at ai integration into web designs. It has also given me a
              taste of backend development with the use of node.js, i have been
              able to get some raw data through the spotify API and present it
              in a cool way.
            </p>
            <p>
              This is also the first time I have made a project in recent years
              with no set criteria. I have been given full creative freedom as
              to what I include and what the purpose of this site is. I cannot
              wait to get stuck into more complex projects to better my skills
              and development and maybe help my life become just a little bit
              easier.
            </p>
            <p>
              This is the first website I have ever fully published and made
              live, so how about that. If you like what you see, be sure to get
              in contact about any potential work you may want doing or any job
              openings you think may suit me.
            </p>
            <p>
              Thanks so much for visiting the site, be sure to have a look
              around and have a read of my blog posts where I talk about my past
              experiences after university life.
            </p>
            <p>
              To contact me follow the links found{" "}
              <span className="text-blue-500 underline hover:text-amber-300">
                <Link to={"/"}>here</Link>
              </span>
            </p>
          </div>

          <div className="mx-auto list-none">
            <ConnectButton
              icon={<FiGithub className="size-10" />}
              infoTag={"Repo"}
              marLeft={"ml-[-2px]"}
              dest={"https://github.com/ArchieBett175/archie_bett_portfolio"}
            />
          </div>

          <div className="mx-auto">
            <iframe
              src="https://drive.google.com/file/d/1Biz8DsvI60g6TXo20zQegaKEwDyFHI--/preview"
              width="720"
              height="480"
              allow="autoplay"
              loading="eager"
            ></iframe>
          </div>
        </motion.div>
      </BgImage>
      <Footer />
    </>
  );
};

export default PortfolioSite;
