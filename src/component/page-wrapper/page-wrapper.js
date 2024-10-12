import React from "react";
import "./page-wrapper.css";

const PageWrapper = ({ children }) => {
  return <div className="page-container">{children}</div>;
};

export default PageWrapper;
