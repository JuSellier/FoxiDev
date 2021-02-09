import React, { useState, useEffect } from "react";
import "./LightToggle.scss";
import { FaCloudSun as SunIcon } from "react-icons/fa";
import { FaCloudMoon as MoonIcon } from "react-icons/fa";

const LightToggle = () => {
  const [light, setLight] = useState(false);

  useEffect(() => {
    const lightPref = localStorage.getItem("light");

    if (lightPref === null) {
      const currentDate = new Date();
      const time = currentDate.getHours();
      if (time >= 8 && time <= 20) {
        setLight(() => true);
      } else {
        setLight(() => false);
      }
    }

    if (lightPref === "true" && light === false) {
      return setLight(() => true);
    } else if (lightPref === "false" && light === true) {
      return setLight(() => false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (light === true) {
      document.documentElement.classList.add("light");
    } else if (light === false) {
      document.documentElement.classList.remove("light");
    }
  }, [light]);

  function toggleLight() {
    if (light === false) {
      localStorage.setItem("light", true);
    } else if (light === true) {
      localStorage.setItem("light", false);
    }
    setLight((curr) => !curr);
  }

  return (
    <div className="LightToggle" onClick={toggleLight}>
      {light ? <MoonIcon /> : <SunIcon />}
    </div>
  );
};

export default LightToggle;
