import React from "react";
import "./tabs.css";

const Tabs = ({ children, selectedTag, setSelectedTag }) => {
  return (
    <p
      className={
        selectedTag === children ? "tabs-container selected" : "tabs-container"
      }
      onClick={() => setSelectedTag(children)}
    >
      {children}
    </p>
  );
};

export default Tabs;
