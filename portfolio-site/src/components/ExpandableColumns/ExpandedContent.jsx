import { motion } from "motion/react";
import React from "react";

const ExpandedContent = ({ fullDescription }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ delay: 0.2 }}
      className="flex-1 overflow-y-auto"
    >
      <div className="space-y-4">
        <div className="w-1/2 mx-auto">
          <div className="">
            {fullDescription.map((desc, index) => (
              <p key={index} className="text-lg wrap-normal text-center mb-5">{`- ${desc}`}</p>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ExpandedContent;
