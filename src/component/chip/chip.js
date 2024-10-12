import React from "react";

const Chip = ({ displayName }) => {
  return (
    <p
      style={{
        width: "fit-content",
        background: "rgba(0,0,0,0.3)",
        borderRadius: "8px",
        padding: "6px 16px",
        color: "inherit",
        fontSize: "14px",
      }}
    >
      {displayName}
    </p>
  );
};

export default Chip;
