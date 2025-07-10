import React from "react";
import ocadoLogo from "../assets/ocado-logo.png";
import asdaLogo from "../assets/asda-logo.png";
import welcomeBreakLogo from "../assets/Welcome_Break_logo.svg";
import yorkLogo from "../assets/uni_york_logo.png";
import chancellorsLogo from "../assets/chancellors_sch_logo.png";
import SwitchButton from "./switchButton";

const TimelineItem = ({ item, isFirst, isLast }) => {
  console.log(item.id, isFirst);

  return (
    <>
      {isFirst && (
        <div className="w-1 h-12 border-2 border-neutral-500 rounded-full ml-9.5"></div>
      )}
      <div className="flex w-full h-1/10">
        <div
          className={`size-20 absolute -mt-1 rounded-full flex justify-center ${
            item.logoBackground === "white"
              ? "bg-white"
              : item.logoBackground === "transparent"
              ? "bg-transparent"
              : `bg-[${item.logoBackground}]`
          }`}
        >
          <img src={item.logo} alt={`logo from ${item.company}`}></img>
        </div>
        <div className="w-1/6"></div>
        <div className="flex-col -mt-2 w-5/6">
          <p className="text-xs opacity-30">{item.period}</p>
          <h1>{item.title}</h1>
          <p className="text-xs opacity-30">{item.company}</p>

          <div className="space-y-1">
            {item.description.map((desc, index) => (
              <p key={index} className="text-sm">
                {`- ${desc}`}
              </p>
            ))}
          </div>
        </div>
      </div>

      {!isLast ? (
        <div className="w-1 h-1/5 border-2 border-neutral-500 rounded-full ml-9.5 "></div>
      ) : (
        <div className="w-1 h-1/7 border-2 border-neutral-500 rounded-full ml-9.5 "></div>
      )}
    </>
  );
};

export default TimelineItem;
