import React, { useEffect } from "react";
import "./ExperimentPage.scss";
import ScrollToTop from "../../ScrollToTop/ScrollToTop";
import LightToggle from "../../LightToggle/LightToggle";
import { Link } from "react-router-dom";

const ExperimentPage = ({ children }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <header className="Experiment-Header">
        <Link
          to="/experiments"
          className="Experiment-Header-Back cursor-clickable"
        >
          Back to FoxiDev.io
        </Link>
      </header>
      {children}

      <LightToggle />
      <ScrollToTop />
    </>
  );
};

export default ExperimentPage;
