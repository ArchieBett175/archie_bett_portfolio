import React from "react";
import { motion } from "motion/react";

const CollapsedContent = ({ shortDescription }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex-1 flex-col flex justify-center"
    >
        <p className="text-center opacity-90">{shortDescription}</p>
        <div className="mt-4 text-center">
            <span className="text-sm opacity-75">Click to expand</span>
        </div>
    </motion.div>
  );
};

export default CollapsedContent;
