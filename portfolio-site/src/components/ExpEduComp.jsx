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

const experienceData = [
  {
    id: "1",
    period: "Sept 2024 - Present",
    title: "Customer Service Team Member",
    company: "Ocado Logistics",
    logo: ocadoLogo,
    logoBackground: "transparent",
    clsNm : "size-20",
    description: [
      "Maxmised sales with thorough knowledge of over 50,000+ products maximising sales up 9.5% over the seasonal period",
      "Ensured high levels of communiacation providing outstanding customer service and gaining 100% on multiple customer feedback forms",
    ],
  },
  {
    id: "2",
    period: "Febr 2023 - July 2024",
    title: "Home Delivery Driver",
    company: "Asda Stores Limited",
    logo: asdaLogo,
    logoBackground: "white",
    clsNm : "size-19",
    description: [
      "Delivered high quality service to up to 20 customers per shift",
      "Tackled multiple issues on shift in dynamic enviroments, built strong customer relations developing brand image",
    ],
  },
  {
    id: "3",
    period: "July 2021 - Sept 2023",
    title: "Team Member",
    company: "Welcome Break",
    logo: welcomeBreakLogo,
    logoBackground: "#272a2b",
    clsNm : "size-19",
    description: [
      "Took deliveries of over 5000+ items ensuring correct quality and proper rotation, resulting in sales upwards of £15000 a day",
      "Took Leadership roles to ensure quality of product and customer satisfaction, whilst coming face to face with over 300 customers daily",
    ],
  },
];

const educationData = [
  {
    id: "1",
    period: "Sept 2021 - July 2024",
    title: "BSc Interactive Media - 2:1",
    company: "University Of York",
    logo: yorkLogo,
    logoBackground: "white",
    clsNm : "w-19 h-10",
    description: [
      "Modules Include: UX Design, Computational Thinking (Object-Oriented Programming), Web Application Design, Mobile Interaction, Business in interactive media, Adobe Creative Suite Design, Advanced interaction techniques and technologies",
    ],
  },
  {
    id: "2",
    period: "Sept 2019 - July 2021",
    title: "A-Levels",
    company: "Chancellor's School",
    logo: chancellorsLogo,
    logoBackground: "white",
    clsNm : "size-15 mt-2",
    description: [
      "A-Levels in: Business Studies (A) - Film Studies (A) - Computer Science (B)",
    ],
  },
  {
    id: "3",
    period: "Sept 2014 - July 2019",
    title: "GCSE's",
    company: "Chancellor's School",
    logo: chancellorsLogo,
    logoBackground: "white",
    clsNm : "size-15 mt-2",
    description: [
      "GCSEs in: Computer Science - Media Studies - History - Maths - English Liturature - English Language - Combined Science - German",
    ],
  },
];

const ExpEduComp = () => {
  const [selected, setSelected] = useState("experience");

  return (
    <div className="text-white font-roboto flex justify-center h-200 bg-black">
      {/* background */}
      <div
        className="h-15/16 w-3/4 flex-col place-items-center shadow-[0_0_75px_5px_rgba(59,59,59,0.75)]
          rounded-[3rem] bg-neutral-950"
      >
        <SwitchButton isSelected={selected} onToggle={setSelected} />

        <div className="w-full h-1 bg-neutral-500 mt-5 -mb-0.5"></div>
          <TimelineContainer
            items={experienceData}
            isVisible={selected === "experience"}
          />
          <TimelineContainer
            items={educationData}
            isVisible={selected === "education"}
          />
        <div className="w-full h-1 bg-neutral-500 -mt-9.5"></div>
      </div>
    </div>
  );
};

export default ExpEduComp;
