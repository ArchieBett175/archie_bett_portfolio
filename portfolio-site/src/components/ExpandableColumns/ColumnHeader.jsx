import React from "react";
import { motion } from "motion/react";
import { X } from "lucide-react";

const ColumnHeader = ({
  logo,
  timeFrame,
  title,
  company,
  clsNm,
  isActive,
  onClose,
}) => {
  return (
    <div className="flex items-center justify-between mb-4">
      <div className="flex gap-3 items-center">
        <div
          className={`size-20 absolute -mt-1 rounded-full flex justify-center items-center ${
            item.logoBackground === "white"
              ? "bg-white"
              : item.logoBackground === "transparent"
              ? "bg-transparent"
              : `bg-[${item.logoBackground}]`
          }`}
        >
          <img
            src={logo}
            alt={`logo from ${company}`}
            className={`${clsNm}`}
          ></img>
        </div>
        <div>
          <h3 className="text-sm opacity-30">{timeFrame}</h3>
          <h1 className="text-lg">{title}</h1>
          <h3 className="text-sm opacity-30">{company}</h3>
        </div>
      </div>
      {isActive && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          onClick={onClose}
          className="p-2 rounded-full bg-white  bg-opacity-20 hover:bg-opacity-30 transition-colors"
        >
          <X className="w-4 h-4" />
        </motion.button>
      )}
    </div>
  );
};

export default ColumnHeader;
