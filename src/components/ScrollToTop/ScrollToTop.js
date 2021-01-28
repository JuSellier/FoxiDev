import React from "react";
import "./ScrollToTop.scss";

import { HiOutlineArrowNarrowUp as ScrollIcon } from "react-icons/hi";

const ScrollToTop = ({ topPosition = 0 }) => {
  function scrollToTop(topPosition) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="ScrollToTop" onClick={scrollToTop}>
      <ScrollIcon />
    </div>
  );
};

export default ScrollToTop;
