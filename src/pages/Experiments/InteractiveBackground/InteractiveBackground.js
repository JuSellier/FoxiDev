import React, { useState, useEffect } from "react";
import "./InteractiveBackground.scss";
import ExperimentPage from "../../../components/Layouts/ExperimentPage/ExperimentPage";

const InteractiveBackground = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const arr = [];
    const NUMBER_OF_PARTICLES =
      (window.innerWidth / 40) * (window.innerHeight / 40);
    for (let i = 0; i < NUMBER_OF_PARTICLES; i++) arr[i] = 1;
    setParticles(() => arr);
  }, []);

  return (
    <ExperimentPage>
      <div className="InteractiveBackground">
        <h1 className="contain">Damn. That's a nice background hover effect</h1>
        <h1 className="contain">Damn. That's a nice background hover effect</h1>
        <h1 className="contain">Damn. That's a nice background hover effect</h1>
        <h1 className="contain">Damn. That's a nice background hover effect</h1>
        <h1 className="contain">Damn. That's a nice background hover effect</h1>

        <div className="InteractiveBackground-Wrapper">
          {particles.map((val, index) => {
            return (
              <span
                onMouseEnter={(e) => {
                  e.target.classList.add("animate");
                }}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </ExperimentPage>
  );
};

export default InteractiveBackground;
