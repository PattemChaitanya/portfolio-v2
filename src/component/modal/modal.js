import React from "react";
import "./modal.css";
import { toShowInModel } from "../../app-data/about-page";
import { Close } from "../../assets/svgIcons/allIcons";

const ModalView = ({ setIsOpen }) => {
  return (
    <div className="modal-container">
      <div className="content-container">
        <div
          onClick={() => setIsOpen((prev) => !prev)}
          style={{
            float: "right",
            color: "#000",
          }}
        >
          <Close />
        </div>
        {Object.values(toShowInModel).map((item) => (
          <div style={{ marginTop: "20px" }}>
            <div>
              <h2>{item.role}</h2>
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  alignItems: "center",
                  fontSize: "14px",
                }}
              >
                <p>{item.company}</p>
                <div
                  style={{
                    width: "4px",
                    height: "4px",
                    background: "#000",
                    borderRadius: "50%",
                  }}
                />
                <p>{item.location}</p>
              </div>
            </div>
            {item.projects.map((project) => (
              <article style={{ margin: "8px 0" }}>
                <h3>{project.name}</h3>
                <ul style={{ padding: "6px 16px" }}>
                  {project.pointsToShow.map((point) => (
                    <li>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModalView;
