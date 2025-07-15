import React, { useState } from 'react'

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
    shortDescription: "Delivering Positive Customer Experiences",
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
    shortDescription: "Delivering Home Shopping",
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
    shortDescription: "Working closely with customers to ensure a positive experience",
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
    shortDescription: "Computer Science based degree, delivering high value solutions to complex problems",
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
    shortDescription: "Carried out 3 A-level courses achieving well in all 3",
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
    shortDescription: "Persuing 9 GCSEs",
  },
];

const ExpandableColumns = () => {
    const [selected, setSelected] = useState("experience");
    const [activeColumn, setActiveColumn] = useState(null)

    const handleOutsideClick = () => setActiveColumn(null)
  return (
    <div>ExpandableColumns</div>
    //continue with return functionality
  )
}

export default ExpandableColumns