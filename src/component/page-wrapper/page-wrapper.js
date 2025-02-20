import React from "react";
import "./page-wrapper.css";

const PageWrapper = ({ children }) => {
  return <section className="page-container">{children}</section>;
};

export default PageWrapper;
