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
  logoBackground,
}) => {
  return (
    <div className="flex items-center justify-between mb-4">
      <div className="flex flex-col gap-3 w-full">
        <div className="w-full flex justify-center">
          <div
            className={`size-20 rounded-full flex items-center justify-center ${
              logoBackground === "white"
                ? "bg-white"
                : logoBackground === "transparent"
                ? "bg-transparent"
                : `bg-[${logoBackground}]`
            }`}
          >
            <img
              src={logo}
              alt={`logo from ${company}`}
              className={`${clsNm}`}
            />
          </div>
        </div>
        <div className="text-center">
          <h3 className="text-md opacity-30">{timeFrame}</h3>
          <h1 className="text-xl">{title}</h1>
          <h3 className="text-md opacity-30">{company}</h3>
        </div>
      </div>
      {isActive && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          onClick={onClose}
          className="p-2 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition-colors absolute top-4 right-4"
        >
          <X className="w-4 h-4" />
        </motion.button>
      )}
    </div>
  );
};

export default ColumnHeader;
