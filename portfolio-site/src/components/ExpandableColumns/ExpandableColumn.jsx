import React from "react";
import { motion, AnimatePresence } from "motion/react";
import ColumnHeader from "./ColumnHeader";
import CollapsedContent from "./CollapsedContent";
import ExpandedContent from "./ExpandedContent";

const ExpandableColumn = ({
  column,
  isActive,
  activeColumn,
  setActiveColumn,
}) => {
  const handleClick = () => {
    setActiveColumn(isActive ? null : column.id);
  };

  const getColumnWidth = () => {
    if (activeColumn === null) return "33.333%";
    if (isActive) return "60%";
    return "20%";
  };

  const getColumnOrder = () => {
    if (activeColumn === null) return column.id;
    if (isActive) return 2;
    return column.id < activeColumn ? 1 : 3;
  };

  return (
    <motion.div
      layout
      onClick={handleClick}
      className="relative overflow-hidden rounded-lg cursor-pointer bg-gradient-to-br shadow-lg hover:shadow-xl transition-shadow bg-zinc-700"
      style={{ order: getColumnOrder() }}
      animate={{ width: getColumnWidth() }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className={`absolute inset-0 bg-opacity-20 ${column.cardColour}`} />
      <div className="relative z-10 p-6 h-full flex flex-col text-zinc-200">
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
            setActiveColumn(null);
          }}
        />


          {console.log(column.description)}
        {!isActive && (
          <CollapsedContent shortDescription={column.shortDescription} />
        )}

        <AnimatePresence>
          {isActive && <ExpandedContent fullDescription={column.description} />}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default ExpandableColumn;
