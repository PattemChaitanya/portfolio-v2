import React from "react";
import "./cards.css";
import { GitHubIcon, Launch } from "../../assets/svgIcons/allIcons";
import { Link } from "react-router-dom";

const Cards = ({ image, name, githubLink, liveSiteLink }) => {
  return (
    <div
      className="card-container"
      style={{ backgroundImage: `url(${image})` }}
    >
      {image.length === 0 && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "inherit",
            textAlign: "center",
            color: "#393939",
          }}
        >
          <h2>{name}</h2>
        </div>
      )}
      <div className="links-card">
        <Link
          to={githubLink}
          target="_blank"
          style={{
            padding: "6px",
            borderRadius: "50%",
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <GitHubIcon />
        </Link>
        {liveSiteLink.length > 0 && (
          <Link
            to={liveSiteLink}
            target="_blank"
            style={{
              padding: "6px",
              borderRadius: "50%",
              background: "rgba(0,0,0,0.5)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Launch />
          </Link>
        )}
      </div>
      {image.length > 0 && <p className="name">{name}</p>}
    </div>
  );
};

export default Cards;
