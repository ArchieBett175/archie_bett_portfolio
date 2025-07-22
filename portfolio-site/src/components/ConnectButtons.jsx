import React from "react";
import { AnimatePresence, motion } from "motion/react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { PiReadCvLogoBold } from "react-icons/pi";
import { MdOutlineMailOutline } from "react-icons/md";
import { useState } from "react";
import ConnectButton from "./ConnectButton";

const ConnectButtons = () => {
  const [showGitTooltip, setShowGitTooltip] = useState(false);
  const [showLinkdinTooltip, setShowLinkdinTooltip] = useState(false);
  const [showMailTooltip, setShowMailTooltip] = useState(false);
  const [showCVTooltip, setShowCVTooltip] = useState(false);

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
      className="mt-12"
    >
      <h1 className="font-roboto font-light text-zinc-500">Let's Connect ...</h1>
      <motion.ul
        varients={{
          initial: {
            opacity: 0,
            y: -40,
          },
          animate: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="initial"
        whileInView="animate"
        transition={{ duration: 0.2, ease: "easeInOut", staggerChildren: 0.5 }}
        viewport={{once: true}}
        className="flex gap-3 mt-2 connect-keys"
      >
        <ConnectButton
          icon={<FiGithub className="size-10" />}
          infoTag={"GitHub"}
          marLeft={"ml-[-5px]"}
        />
        <ConnectButton
          icon={<FiLinkedin className="size-10" />}
          infoTag={"LinkedIn"}
          marLeft={"ml-[-13px]"}
        />
        <ConnectButton
          icon={<MdOutlineMailOutline className="size-10" />}
          infoTag={"Email"}
          marLeft={"ml-[-3px]"}
        />
        <ConnectButton
          icon={<PiReadCvLogoBold className="size-10" />}
          infoTag={"CV"}
          marLeft={"ml-[7px]"}
        />
      </motion.ul>
    </motion.div>
  );
};

export default ConnectButtons;
