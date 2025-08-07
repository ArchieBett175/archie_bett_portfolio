import React, { useEffect } from "react";
import {
  useMotionTemplate,
  useMotionValue,
  animate,
  motion
} from "motion/react";

const DEFAULT_COLOURS = ["#959df9", "#ea7bba", "#fc36db", "#b3a7ec"];

const BgImage = ({  children, 
  colors = DEFAULT_COLOURS,
  duration = 5,
  className = "",
  gradientPosition = "50% 0%",
  baseColor = "#020617",
  baseColorVal = "50%"
}) => {
  const colour = useMotionValue(colors[0]);
  const backgroundImage = useMotionTemplate`radial-gradient(125% 100% at ${gradientPosition}, ${baseColor} ${baseColorVal}, ${colour})`;

  useEffect(() => {
    animate(colour, colors, {
      ease: "easeInOut",
      duration: duration,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [colour, colors, duration]);

  return (
    <motion.section
      style={{ backgroundImage }}
      className={`relative min-h-screen bg-gray-950 text-gray-200 ${className}`}
    >
      {children}
    </motion.section>
  );
};

export default BgImage