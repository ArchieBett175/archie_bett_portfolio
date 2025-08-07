import React from "react";
import { motion } from "motion/react";

const SwitchButton = ({ isSelected, onToggle }) => {

  return (
    <div className="relative flex w-fit bg-black h-fit mt-6 rounded-full self-center mx-auto">
      <div
        className="px-3 py-2 rounded-full z-10 relative cursor-pointer"
        onClick={() => onToggle("experience")}
      >
        <button className="cursor-pointer">Experience</button>
      </div>
      <div
        className="px-3 py-2 rounded-full z-10 relative cursor-pointer"
        onClick={() => onToggle("education")}
      >
        <button className="cursor-pointer">Education</button>
      </div>

      <div
        className={`absolute inset-0 z-0 flex ${
          isSelected === "experience" ? "justify-start" : "justify-end"
        }`}
      >
        <motion.span
          layout
          transition={{ type: "spring", damping: 15, stiffness: 300 }}
          className="h-full w-1/2 rounded-full bg-gray-500"
        ></motion.span>
      </div>
    </div>
  );
};

export default SwitchButton;
