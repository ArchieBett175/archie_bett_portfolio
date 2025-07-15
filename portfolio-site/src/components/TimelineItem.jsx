import React from "react";


const TimelineItem = ({ item, isFirst, isLast }) => {

  return (
    <>
      {isFirst && (
        <div className="w-1 h-12 border-2 border-neutral-500 rounded-full ml-9.5"></div>
      )}
      <div className="flex w-full h-1/10">
        <div
          className={`size-20 absolute -mt-1 rounded-full flex justify-center items-center ${
            item.logoBackground === "white"
              ? "bg-white"
              : item.logoBackground === "transparent"
              ? "bg-transparent"
              : `bg-[${item.logoBackground}]`
          }`}
        >
          <img src={item.logo} alt={`logo from ${item.company}`} className={`${item.clsNm}`} ></img>
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
        <div className="w-1 h-1/6 border-2 border-neutral-500 rounded-full ml-9.5 "></div>
      )}
    </>
  );
};

export default TimelineItem;
