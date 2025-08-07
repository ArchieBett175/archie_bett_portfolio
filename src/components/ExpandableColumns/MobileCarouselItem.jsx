import React from "react";
import ColumnHeader from "./ColumnHeader";
import { AnimatePresence, motion } from "motion/react";
import ExpandedContent from "./ExpandedContent";

const MobileCarouselItem = ({ column, isActive }) => {
  return (
    <div
      className="relative overflow-hidden rounded-lg bg-gradient-to-br 
        shadow-lg hover:shadow-xl transition-shadow bg-zinc-700 max-h-[490px] h-[500px] md:w-auto md:min-h-0 w-10/11 place-self-center"
    >
      <div className={`absolute inset-0 bg-opacity-20 ${column.cardColour}`} />
      <div className=" relative z-10 p-6 h-full flex flex-col text-zinc-200">
        <ColumnHeader
          title={column.title}
          company={column.company}
          logo={column.logo}
          timeFrame={column.period}
          clsNm={column.clsNm}
          logoBackground={column.logoBackground}
          isActive={isActive}
          onClose={(e) => {
            e.stopPropagation();
          }}
        />

        <AnimatePresence>
            <ExpandedContent fullDescription={column.description}/>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default MobileCarouselItem;
