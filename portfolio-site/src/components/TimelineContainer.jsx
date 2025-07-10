import React from "react";
import TimelineItem from "./TimelineItem";

const TimelineContainer = ({ items, isVisible }) => {
  return (
    <div
      className={`w-7/8 h-5/6 exp${
        isVisible ? "opacity-100" : "opacity-0 absolute top-0 -z-10"
      }`}
    >
      {items.map((item, index) => (
        <TimelineItem
          item={item}
          key={item.id}
          isFirst={index === 0}
          isLast={index === items.length - 1}
        />
      ))}
    </div>
  );
};

export default TimelineContainer;
