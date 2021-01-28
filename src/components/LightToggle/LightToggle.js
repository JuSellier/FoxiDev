import React, { useState, useEffect } from "react";
import "./LightToggle.scss";
import { FaCloudSun as SunIcon } from "react-icons/fa";
import { FaCloudMoon as MoonIcon } from "react-icons/fa";

const LightToggle = () => {
  const [light, setLight] = useState(false);

  useEffect(() => {
    const lightPref = localStorage.getItem("light");
    console.log(`Prefers light mode: ${lightPref}`);
    if (lightPref === "true" && light === false) setLight(() => true);
    else if (lightPref === "false" && light === true) setLight(() => false);
  }, []);

  useEffect(() => {
    if (light === true) {
      document.documentElement.classList.add("light");
      localStorage.setItem("light", true);
    } else if (light === false) {
      document.documentElement.classList.remove("light");
      localStorage.setItem("light", false);
    }
  }, [light]);

  return (
    <div className="LightToggle" onClick={() => setLight((curr) => !curr)}>
      {light ? <MoonIcon /> : <SunIcon />}
    </div>
  );
};

export default LightToggle;
