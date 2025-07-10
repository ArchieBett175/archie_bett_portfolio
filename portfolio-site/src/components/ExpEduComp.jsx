import React from "react";
import { useState } from "react";
import { motion } from "motion/react";
import ocadoLogo from "../assets/ocado-logo.png";
import asdaLogo from "../assets/asda-logo.png";
import welcomeBreakLogo from "../assets/Welcome_Break_logo.svg";
import yorkLogo from "../assets/uni_york_logo.png";
import chancellorsLogo from "../assets/chancellors_sch_logo.png";
import SwitchButton from "./switchButton";
import TimelineItem from "./TimelineItem";
import TimelineContainer from "./TimelineContainer";

const ExpEduComp = () => {

    const [selected, setSelected] = useState("experience")

  return (
    <div className="text-white font-roboto flex justify-center h-200 bg-black">
      {/* background */}
      <div
        className="h-15/16 w-3/4 flex-col place-items-center shadow-[0_0_50px_10px_rgba(59,59,59,0.75)]
          rounded-[3rem] bg-neutral-950"
      >
        {/* switch button */}
        <SwitchButton isSelected={selected} onToggle={setSelected}/>

        <div className="w-full h-1 bg-neutral-500 mt-5 -mb-0.5"></div>
        <TimelineContainer />
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
            <div className="size-20 absolute -mt-1 rounded-full flex justify-center">
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
                - Ensured high levels of communiacation providing outstanding
                customer service and gaining 100% on multiple customer feedback
                forms
              </p>
            </div>
          </div>

          <div className="w-1 h-1/5 border-2 border-neutral-500 rounded-full ml-9.5 "></div>

          <div className="flex w-full h-1/10">
            <div className="size-20 bg-white rounded-full flex justify-center absolute -mt-1">
              <img src={asdaLogo} alt="Logo from Asda" className="size-19" />
            </div>
            <div className="w-1/6"></div>
            <div className="flex-col -mt-2 w-5/6">
              <p className="text-xs opacity-30">Febr 2023 - July 2024</p>
              <h1>Home Delivery Driver</h1>
              <p className="text-xs opacity-30">Asda Stores Limited</p>
              <p className="text-sm">
                - Delivered high quality service to up to 20 customers per shift
              </p>
              <p className="text-sm">
                - Tackled multiple issues on shift in dynamic enviroments, built
                strong customer relations developing brand image
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
                - Took deliveries of over 5000+ items ensuring correct quality
                and proper rotation, resulting in sales upwards of £15000 a day
              </p>
              <p className="text-sm">
                - Took Leadership roles to ensure quality of product and
                customer satisfaction, whilst coming face to face with over 300
                customers daily
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
                (Object-Oriented Programming), Web Application Design, Mobile
                Interaction, Business in interactive media, Adobe Creative Suite
                Design, Advanced interaction techniques and technologies
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
                A-Levels in: Business Studies(A) | Film Studies(A) | Computer
                Science(B)
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
                GCSEs in: Computer Science | Media Studies | History | Maths |
                English Liturature | English Language | Combined Science |
                German
              </p>
            </div>
          </div>

          <div className="w-1 h-1/7 border-2 border-neutral-500 rounded-full ml-9.5 "></div>
        </div>
        <div className="w-full h-1 bg-neutral-500 -mt-3"></div>
      </div>
    </div>
  );
};

export default ExpEduComp;
