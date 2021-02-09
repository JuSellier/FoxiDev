import React, { useEffect, useRef } from "react";
import "./DynamicCursor.scss";
import ExperimentPage from "../../../components/Layouts/ExperimentPage/ExperimentPage";
import { Link } from "react-router-dom";

const DynamicCursor = () => {
  const circleEl = useRef();
  const pointEl = useRef();
  const pageEl = useRef();

  useEffect(() => {
    pageEl.current.style.cursor = "none";

    pageEl.current.addEventListener("mouseenter", () => {
      circleEl.current.style.visibility = "visible";
      pointEl.current.style.visibility = "visible";
    });

    pageEl.current.addEventListener("mouseleave", () => {
      circleEl.current.style.visibility = "hidden";
      pointEl.current.style.visibility = "hidden";
    });

    pageEl.current.addEventListener("mousemove", function (e) {
      if (e.target.classList.contains("cursor-clickable")) {
        circleEl.current.classList.add("focus");
        pointEl.current.style.visibility = "hidden";

        circleEl.current.style.top = e.target.offsetTop + "px";
        circleEl.current.style.left = e.target.offsetLeft + "px";
        circleEl.current.style.width = e.target.offsetWidth + "px";
        circleEl.current.style.height = e.target.offsetHeight + "px";
      } else if (e.target.classList.contains("cursor-invert")) {
        circleEl.current.classList.add("invert");
        pointEl.current.style.visibility = "hidden";
        moveWithCursor(circleEl.current, e);
        moveWithCursor(pointEl.current, e);
      } else {
        circleEl.current.style = "";
        pointEl.current.style.visibility = "initial";
        moveWithCursor(circleEl.current, e);
        moveWithCursor(pointEl.current, e);
        circleEl.current.classList.remove("focus");
        circleEl.current.classList.remove("invert");
      }
    });
  }, []);

  function moveWithCursor(obj, e) {
    obj.style.top = e.clientY + "px";
    obj.style.left = e.clientX + "px";
  }

  return (
    <ExperimentPage>
      <div ref={pageEl} className="DynamicCursor">
        <section>
          <h1>Dynamic cursor (optimized for Desktop)</h1>
        </section>

        <section className="DynamicCursor-ClickableEls">
          <p>The dynamic cursor changes when hovering clickable elements</p>
          <button className="slide-gradient cursor-clickable">
            I'm a button
          </button>
          <Link href="/" className="cursor-clickable">
            I'm a link
          </Link>
        </section>

        <section className="DynamicCursor-Filter">
          <p className="cursor-invert">
            Hover over this text to see something cool.
          </p>
        </section>

        <div ref={pointEl} className="Cursor-Point"></div>
        <div ref={circleEl} className="Cursor-Circle"></div>
      </div>
    </ExperimentPage>
  );
};

export default DynamicCursor;
