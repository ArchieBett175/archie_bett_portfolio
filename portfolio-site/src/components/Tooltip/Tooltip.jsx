import React, { useState } from "react";
import "./Tooltip.css";

const Tooltip = ({ infoText, children }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      className="tootip-container"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {children}

      {/* Tooltop content */}
      <div className={`tooltip ${showTooltip ? "open" : ""}`}>
        {infoText}
        <div className="arrow" />
      </div>
    </div>
  );
};

export default Tooltip;
