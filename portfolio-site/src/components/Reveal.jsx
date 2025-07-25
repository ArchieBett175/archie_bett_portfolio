import React, { useEffect, useRef } from "react";
import { useInView, motion, useAnimation } from "motion/react";

const Reveal = ({ children, width = "w-fit" }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, {once: true}) 

    const mainControls = useAnimation()
    const slideControls = useAnimation()

    useEffect(() => {
        if(isInView){
            mainControls.start("visible")
            slideControls.start("visible")
        }
    }, [isInView])

  return (
    <div ref={ref} className={`relative ${width} overflow-hidden`}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25}}
      >
        {children}
      </motion.div>
        <motion.div variants={{
            hidden: { left: 0},
            visible: { left: "100%" },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5}}
        style={{
            position: "absolute",
            top: 4,
            bottom: 4,
            left: 0,
            right: 0,
            background: "#7c86ff",
            zIndex: 20,
            opacity: 30
        }}
        
        />

    </div>
  );
};

export default Reveal;
