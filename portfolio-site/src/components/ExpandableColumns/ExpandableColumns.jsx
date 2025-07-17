import React, { useState } from "react";
import ExpandableColumn from "./ExpandableColumn";

const ExpandableColumns = ({ isVisible, items }) => {
  const [activeColumn, setActiveColumn] = useState(null);

  const handleOutsideClick = () => setActiveColumn(null);
  return (
    <div
      className={`w-full max-w-6xl mx-auto p-4 exp${
        isVisible ? "opacity-100" : "opacity-0 absolute top-0 -z-10"
      }`}
    >
      <div
        className="flex space-y-4 md:flex-row md:space-y-0 md:gap-2 h-auto md:h-128 relative"
        onClick={(e) => {
          if (e.target === e.currentTarget) handleOutsideClick();
        }}
      >
        {items.map((item) => (
          <ExpandableColumn
            key={item.id}
            column={item}
            isActive={activeColumn === item.id}
            activeColumn={activeColumn}
            setActiveColumn={setActiveColumn}
          />
        ))}
      </div>
    </div>
  );
};

export default ExpandableColumns;
