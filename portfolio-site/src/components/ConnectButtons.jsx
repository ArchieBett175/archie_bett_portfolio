import React from "react";
import { AnimatePresence, motion } from "motion/react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { PiReadCvLogoBold } from "react-icons/pi";
import { MdOutlineMailOutline } from "react-icons/md";
import { useState } from "react";
import ConnectButton from "./ConnectButton";

const ConnectButtons = () => {

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
      <h1 className="font-roboto text-zinc-400">Let's Connect ...</h1>
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
          dest={"https://github.com/ArchieBett175"}
        />
        <ConnectButton
          icon={<FiLinkedin className="size-10" />}
          infoTag={"LinkedIn"}
          marLeft={"ml-[-13px]"}
          dest={"https://www.linkedin.com/in/archie-bett-/"}
        />
        <ConnectButton
          icon={<MdOutlineMailOutline className="size-10" />}
          infoTag={"Email"}
          marLeft={"ml-[-3px]"}
          dest={"mailto:archiebett@hotmail.co.uk?subject=Portfolio Contact&body=Hi Archie!%0D%0AI saw your Portfolio Site and thought it was great.%0D%0ACould we discuss further?"}
        />
        <ConnectButton
          icon={<PiReadCvLogoBold className="size-10" />}
          infoTag={"CV"}
          marLeft={"ml-[7px]"}
          dest={"https://drive.google.com/file/d/1fDopjXKT3BTlg-7Eoi396eCOouf9zWnB/view"}
        />
      </motion.ul>
    </motion.div>
  );
};

export default ConnectButtons;
