import React from "react";
import { AnimatePresence, motion } from "motion/react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { useState } from "react";

const ConnectButton = ({ icon, infoTag, marLeft, dest }) => {
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
      <motion.li
        className="h-15 w-15 cursor-pointer select-none rounded-lg bg-zinc-600"
        initial={{
          y: 0,
          borderBottom: "2px solid #52525b",
          boxShadow: "0 10px 0 0 #414145",
        }}
        whileHover={{
          y: 8,
          borderBottom: "0px solid #52525b",
          boxShadow: "0 2px 0 0 #414145",
        }}
        transition={{ duration: 0.1 }}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <span
          className="flex h-full flex-col items-center justify-center
                      text-lg font-medium text-gray-100"
        >
          <a href={dest} target="_blank" rel="noopener noreferrer">
            {icon}
          </a>
        </span>
      </motion.li>
    </motion.div>
  );
};

export default ConnectButton;
