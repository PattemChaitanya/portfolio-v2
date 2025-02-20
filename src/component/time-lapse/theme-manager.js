import { useEffect, useState } from "react";
import "./theme-manager.css";

function TimeLapseTheme() {
  const colorTheme = ["light", "dark"];
  const [currentTime, setCurrentTime] = useState(new Date());

  const getCurrentTheme = () => {
    const hour = currentTime.getHours();

    if (hour >= 6 && hour < 18) {
      return 0;
    } else {
      return 1;
    }
  };

  useEffect(() => {
    const updateTheme = () => {
      document.body.setAttribute("data-theme", colorTheme[getCurrentTheme()]);
    };

    updateTheme();
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
      updateTheme();
    }, 60000);

    return () => clearInterval(intervalId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentTime]);

  return (
    <div className="circle-container">
      {currentTime.getHours() >= 7 &&
        currentTime.getHours() < 17 &&
        [...Array(36)].map((_, index) => (
          <div
            key={index}
            className="line"
            style={{
              transform: `rotate(${index * 10}deg)`,
              left: `${
                ((currentTime.getHours() * 60 + currentTime.getMinutes()) /
                  1440) *
                100
              }%`,
              transformOrigin: "top",
            }}
          />
        ))}
      {(currentTime.getHours() < 5 || currentTime.getHours() >= 17) &&
        [...Array(3)].map((_, index) => (
          <div key={index} className={`star star-${index}`} />
        ))}
    </div>
  );
}

export default TimeLapseTheme;
