import React, { useEffect } from "react";
import { useState } from "react";
import { animate, motion } from "motion/react";
import ocadoLogo from "../assets/ocado-logo.png";
import asdaLogo from "../assets/asda-logo.png";
import welcomeBreakLogo from "../assets/Welcome_Break_logo.svg";
import yorkLogo from "../assets/uni_york_logo.png";
import chancellorsLogo from "../assets/chancellors_sch_logo.png";
import SwitchButton from "./switchButton";
import ExpandableColumns from "./ExpandableColumns/ExpandableColumns";
import "../index.css";
import MobileCarousel from "./ExpandableColumns/MobileCarousel";
import { HandHelpingIcon } from "lucide-react";

const experienceData = [
  {
    id: "1",
    period: "Sept 2024 - Present",
    title: "Customer Service Team Member",
    company: "Ocado Logistics",
    logo: ocadoLogo,
    logoBackground: "transparent",
    clsNm: "size-20",
    description: [
      "Maxmised sales with thorough knowledge of over 50,000+ products maximising sales up 9.5% over the seasonal period",
      "Ensured high levels of communiacation providing outstanding customer service and gaining 100% on multiple customer feedback forms",
    ],
    shortDescription:
      "Focused on sales maximisation, delivering exceptional Customer Service",
    cardColour:
      "bg-gradient-to-b from-purple-500/20 via-indigo-600/20 to-violet-600/20 backdrop-blur-2xl",
  },
  {
    id: "2",
    period: "Febr 2023 - July 2024",
    title: "Home Delivery Driver",
    company: "Asda Stores Limited",
    logo: asdaLogo,
    logoBackground: "white",
    clsNm: "size-19",
    description: [
      "Delivered high quality service to up to 20 customers per shift",
      "Tackled multiple issues on shift in dynamic enviroments, built strong customer relations developing brand image",
    ],
    shortDescription:
      "Delivered outstanding customer experience in fast dynamic enviroment",
    cardColour:
      "bg-gradient-to-b from-teal-500/20 via-emerald-600/20 to-green-600/20 backdrop-blur-2xl",
  },
  {
    id: "3",
    period: "July 2021 - Sept 2023",
    title: "Team Member",
    company: "Welcome Break",
    logo: welcomeBreakLogo,
    logoBackground: "#272a2b",
    clsNm: "size-19",
    description: [
      "Took deliveries of over 5000+ items ensuring correct quality and proper rotation, resulting in sales upwards of £15000 a day",
      "Took Leadership roles to ensure quality of product and customer satisfaction, whilst coming face to face with over 300 customers daily",
    ],
    shortDescription:
      "Maintained Quality and Proffesionalism whilst serving upwards of 300 customers daily",
    cardColour:
      "bg-gradient-to-b from-lime-500/20 via-lime-600/20 to-lime-700/20 backdrop-blur-2xl",
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
    clsNm: "w-19 h-10",
    description: [
      "Modules Include: UX Design, Computational Thinking (Object-Oriented Programming), Web Application Design, Mobile Interaction, Business in interactive media, Adobe Creative Suite Design, Advanced interaction techniques and technologies",
    ],
    shortDescription:
      "A Computer Science based degree focused on solving complex problems with high value solutions",
    cardColour:
      "bg-gradient-to-b from-yellow-500/20 via-yellow-400/20 to-black/20 backdrop-blur-2xl",
  },
  {
    id: "2",
    period: "Sept 2019 - July 2021",
    title: "A-Levels",
    company: "Chancellor's School",
    logo: chancellorsLogo,
    logoBackground: "white",
    clsNm: "size-15 mt-2",
    description: [
      "A-Levels in: Business Studies (A) - Film Studies (A) - Computer Science (B)",
    ],
    shortDescription: "Completed 3 A-levels, achieving high grades",
    cardColour:
      "bg-gradient-to-b from-sky-600/20 via-sky-400/20 to-sky-50/20 backdrop-blur-2xl",
  },
  {
    id: "3",
    period: "Sept 2014 - July 2019",
    title: "GCSE's",
    company: "Chancellor's School",
    logo: chancellorsLogo,
    logoBackground: "white",
    clsNm: "size-15 mt-2",
    description: [
      "GCSEs in: Computer Science - Media Studies - History - Maths - English Liturature - English Language - Combined Science - German",
    ],
    shortDescription: "Gained 9 GCSE's and countless experiences and memories",
    cardColour:
      "bg-gradient-to-b from-sky-600/20 via-sky-400/20 to-sky-50/20 backdrop-blur-2xl",
  },
];

const ExpEduComp = () => {
  const [selected, setSelected] = useState("experience");
  const [isMediumOrLarger, setIsMediumOrLarger] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    setIsMediumOrLarger(mediaQuery.matches);

    const handleChange = (e) => {
      setIsMediumOrLarger(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <div className="text-white flex justify-center h-200 bg-black">
      {/* background */}
      <motion.div
        initial={{ width: "150%", borderRadius: "0rem" }}
        whileInView={{ width: isMediumOrLarger ? "80%" : "95%", borderRadius: "3rem" }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="h-15/16 md:w-3/4 w-10/11 flex-col place-items-center
          rounded-[3rem] bg-gradient-to-b bg-zinc-800 border-2 border-zinc-500"
      >
        <SwitchButton isSelected={selected} onToggle={setSelected} />
        <div className="bg-gradient-to-b from-sky-600/20 via-sky-400/20 to-sky-50/20 backdrop-blur-2xl"></div>
        <div className="w-full h-0.5 bg-zinc-500 mt-5 mb-9"></div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.8, duration: 0.5, ease: "easeInOut" }}
        >
          <ExpandableColumns
            items={experienceData}
            isVisible={selected === "experience" && isMediumOrLarger}
          />
          <ExpandableColumns
            items={educationData}
            isVisible={selected === "education" && isMediumOrLarger}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.8, duration: 0.5, ease: "easeInOut" }}
          id="carousel-mobile"
          className="md:hidden"
        >
          <MobileCarousel
            items={experienceData}
            isVisible={selected === "experience" && !isMediumOrLarger}
          />
          <MobileCarousel
            items={educationData}
            isVisible={selected === "education" && !isMediumOrLarger}
          />
        </motion.div>
        <div className="w-full h-0.5 bg-zinc-500 mt-9.5"></div>
      </motion.div>
    </div>
  );
};

export default ExpEduComp;
