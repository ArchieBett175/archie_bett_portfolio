import React, { useState } from 'react'
import { AnimatePresence, motion } from "motion/react";

const NavElement = ({ icon, infoTag, marLeft }) => {

    const [showToolTip, setShowToolTip] = useState(false);
  return (
            <div className={`${infoTag}Link`}>
          <AnimatePresence>
            {showToolTip && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ y: "-75%", opacity: 1 }}
                exit={{ y: "0%", opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className= {`absolute bg-white rounded-3xl px-3 py-1 font-roboto text-center top-[-20px] ${marLeft}`}
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
              whileHover={{ scale: 1.4 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="cursor-pointer"
            >
              {icon}
            </motion.div>
          </li>
        </div>
  )
}

export default NavElement