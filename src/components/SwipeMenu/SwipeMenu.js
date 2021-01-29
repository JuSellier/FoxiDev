import React, { useRef } from "react";
import "./SwipeMenu.scss";

import { RiArrowLeftSLine as LeftIcon } from "react-icons/ri";
import { RiArrowRightSLine as RightIcon } from "react-icons/ri";

const SwipeMenu = ({ children }) => {
  const swipeMenuEl = useRef();

  function scrollRight() {
    const el = swipeMenuEl.current;
    console.log(el);
    el.scrollLeft += 525;
  }

  function scrollLeft() {
    const el = swipeMenuEl.current;
    console.log(el);
    el.scrollLeft -= 525;
  }

  return (
    <>
      <div ref={swipeMenuEl} className="SwipeMenu no-scrollbar">
        <div className="SwipeMenu-Wrapper">{children}</div>
      </div>

      <div className="SwipeMenu-Nav">
        <div className="SwipeMenu-Left" onClick={scrollLeft}>
          <LeftIcon />
        </div>
        <div className="SwipeMenu-Right" onClick={scrollRight}>
          <RightIcon />
        </div>
      </div>
    </>
  );
};

export default SwipeMenu;
