import React from "react";
import { AnimatePresence, motion } from "motion/react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { useState } from "react";

const ConnectButton = ({ icon, infoTag, marLeft }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <motion.div
      variants={{
        initial: {
          opacity: 0,
          y: -40,
        },
        animate: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 1,
            ease: "easeInOut",
          },
        },
      }}
      className={`rotate-x-30 ${infoTag}But relative`}
    >
      <AnimatePresence>
        {showTooltip && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ y: "-75%", opacity: 1 }}
            exit={{ y: "0%", opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={`absolute text-black bg-white rounded-3xl px-3 py-1 
                        font-roboto text-center top-[-20px] ${marLeft}`}
          >
            {infoTag}
          </motion.p>
        )}
      </AnimatePresence>
      <li
        className="h-15 w-15 cursor-pointer select-none rounded-lg
                    border-b-2 border-zinc-700 bg-zinc-600 transition-all 
                    duration-150 [box-shadow:0_10px_0_0_#414145] active:translate-y-2
                    active:border-b-0 active:[box-shadow:0_0px_0_0_#414145, 0_0px_0_0_#38383d]"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <span
          className="flex h-full flex-col items-center justify-center
                      text-lg font-medium text-gray-100"
        >
          {icon}
        </span>
      </li>
    </motion.div>
  );
};

export default ConnectButton;
