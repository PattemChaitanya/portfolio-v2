import React, { useEffect, useState } from "react";
import "./navbar.css";
import { Link, useLocation } from "react-router-dom";
import { Close, Menu } from "../../assets/svgIcons/allIcons";

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
    <header>
      <nav className="navbar-container">
        <Link
          to="/"
          style={{
            textDecoration: "none",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="200"
            height="50"
            viewBox="0 0 200 50"
          >
            <style>
              @import
              url("https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap");
            </style>
            <text
              x="10"
              y="35"
              font-family="Dancing Script, cursive"
              font-size={screenWidth > 500 ? "48" : "34"}
              font-weight="500"
              fill="currentColor"
            >
              Chey
            </text>
          </svg>
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
            <Menu />
          </div>
        )}
        {openOptions && (
          <div className="mobile-navbar-container">
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
              <div
                style={{ marginTop: "32px" }}
                onClick={() => setOpenOptions(!openOptions)}
              >
                <Close />
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
