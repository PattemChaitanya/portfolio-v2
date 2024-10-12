import React, { useEffect, useState } from "react";
import "./navbar.css";
import { Link, useLocation } from "react-router-dom";
import { Close, Logo, Menu } from "../../assets/svgIcons/allIcons";

const Navbar = () => {
  const location = useLocation();
  const locationPath = location.pathname.split("/")[1];
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [openOptions, setOpenOptions] = useState(false);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="navbar-container">
      <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
        <Logo />
      </Link>
      {screenWidth >= 600 ? (
        <div className="navbar-links">
          {locationPath !== "about" && (
            <Link to="/about" className="navbar-link">
              About
            </Link>
          )}
          {locationPath !== "projects" && (
            <Link to="/projects" className="navbar-link">
              Projects
            </Link>
          )}
          {locationPath !== "contact" && (
            <Link to="/contact" className="navbar-link">
              Contact
            </Link>
          )}
        </div>
      ) : (
        <div onClick={() => setOpenOptions(!openOptions)}>
          {openOptions ? <Close /> : <Menu />}
        </div>
      )}
      {openOptions && (
        <div className="mobile-navbar">
          {locationPath !== "about" && (
            <Link to="/about" className="navbar-link">
              About
            </Link>
          )}
          {locationPath !== "projects" && (
            <Link to="/projects" className="navbar-link">
              Projects
            </Link>
          )}
          {locationPath !== "contact" && (
            <Link to="/contact" className="navbar-link">
              Contact
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
