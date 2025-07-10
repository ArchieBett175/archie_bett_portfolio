import React from "react";
import TimelineItem from "./TimelineItem";
import ocadoLogo from "../assets/ocado-logo.png";
import asdaLogo from "../assets/asda-logo.png";
import welcomeBreakLogo from "../assets/Welcome_Break_logo.svg";
import yorkLogo from "../assets/uni_york_logo.png";
import chancellorsLogo from "../assets/chancellors_sch_logo.png";
import SwitchButton from "./switchButton";

const experienceData = [
  {
    id: "1",
    period: "Sept 2024 - Present",
    title: "Customer Service Team Member",
    company: "Ocado Logistics",
    logo: ocadoLogo,
    logoBackground: "transparent",
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
    logoBackground: "White",
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
    logoBackground: "White",
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
    logoBackground: "White",
    description: [
      "GCSEs in: Computer Science - Media Studies - History - Maths - English Liturature - English Language - Combined Science - German",
    ],
  },
];

const TimelineContainer = ({ items, isVisible }) => {
  return (
    <div className="w/7/8 h-5/6">
      {experienceData.map((item, index) => (
        <TimelineItem
          item={item}
          key={item.id}
          isFirst={index === 0}
          isLast={index === experienceData.length - 1}
        />
      ))}
    </div>
  );
};

export default TimelineContainer;
