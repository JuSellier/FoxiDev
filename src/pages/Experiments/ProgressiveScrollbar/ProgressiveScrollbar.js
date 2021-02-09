import React, { useEffect, useRef } from "react";
import "./ProgressiveScrollbar.scss";
import ExperimentPage from "../../../components/Layouts/ExperimentPage/ExperimentPage";

const ProgressiveScrollbar = () => {
  const progressWrapperEl = useRef();
  const progressEl = useRef();
  const pageEl = useRef();

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleScroll() {
    const yScroll = window.scrollY;
    const maxScroll = pageEl.current.scrollHeight - window.innerHeight;
    console.log(yScroll, maxScroll);
    const height = (yScroll / maxScroll) * 100;
    progressWrapperEl.current.style.height = `${height}vh`;

    progressEl.current.innerText = `${Math.floor(height)}%`;
  }

  return (
    <ExperimentPage>
      <div ref={pageEl} className="ProgressiveScrollbar">
        <h1>Progressive Scrollbar</h1>

        <div ref={progressWrapperEl} className="ProgressiveScrollbar-Progress">
          <div ref={progressEl} className="ProgressiveScrollbar-Progress-Value">
            0%
          </div>
        </div>
      </div>
    </ExperimentPage>
  );
};

export default ProgressiveScrollbar;
