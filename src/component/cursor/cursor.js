import React, { useState, useEffect } from "react";
import "./cursor.css";

const CursorFollower = () => {
  const [position, setPosition] = useState({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateCursorPosition);

    return () => {
      window.removeEventListener("mousemove", updateCursorPosition);
    };
  }, []);

  return (
    <div
      className="cursor-container"
      style={{
        left: position.x,
        top: position.y,
      }}
    >
      <span
        className="cursor-pointer"
        style={{
          left: position.x,
          top: position.y,
        }}
      />
    </div>
  );
};

export default CursorFollower;
