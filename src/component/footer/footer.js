import React from "react";
import "./footer.css";
import {
  GitHubIcon,
  LinkedInIcon,
  PointRightIcon,
} from "../../assets/svgIcons/allIcons";
import { Link } from "react-router-dom";

const Footer = ({ children, path }) => {
  return (
    <footer className="footer-container">
      <Link to={path} className="footer-top">
        {children}
        <PointRightIcon />
      </Link>
      <div className="footer-bottom">
        <Link
          to="https://www.linkedin.com/in/chaitanya-pattem-6742b8139/"
          target="_blank"
        >
          <LinkedInIcon />
        </Link>
        <Link to="https://github.com/PattemChaitanya" target="_blank">
          <GitHubIcon sx={{ float: "center" }} />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
