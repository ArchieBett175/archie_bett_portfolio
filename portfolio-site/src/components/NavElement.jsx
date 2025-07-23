import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { HashLink } from "react-router-hash-link";

const NavElement = ({ icon, infoTag, marLeft, dest }) => {
  const [showToolTip, setShowToolTip] = useState(false);

  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -100;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  return (
    <div className={`${infoTag}Link`}>
      <AnimatePresence>
        {showToolTip && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ y: "-60%", opacity: 1 }}
            exit={{ y: "0%", opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={`absolute bg-white rounded-3xl px-3 py-1 font-roboto text-center top-[-20px] ${marLeft}`}
          >
            {infoTag}
          </motion.p>
        )}
      </AnimatePresence>
      <li
        onMouseEnter={() => setShowToolTip(true)}
        onMouseLeave={() => setShowToolTip(false)}
      >
        <motion.div
          whileHover={{ scale: 1.4, rotate: infoTag === "Experience" ? 180 : 360 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="cursor-pointer"
        >
          <HashLink smooth to={dest} scroll={infoTag === "Experience" ? null : el => scrollWithOffset(el)}>
            {" "}
            {icon}
          </HashLink>
        </motion.div>
      </li>
    </div>
  );
};

export default NavElement;
