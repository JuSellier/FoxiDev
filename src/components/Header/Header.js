import React, { useEffect, useState, useRef } from "react";
import "./Header.scss";
import { Link, NavLink } from "react-router-dom";

// import { GiFoxHead as FoxIcon } from "react-icons/gi";
import { BiMenuAltLeft as NavToggleIcon } from "react-icons/bi";
import { VscClose as CloseIcon } from "react-icons/vsc";
import { RiArrowDropRightLine as ButtonIcon } from "react-icons/ri";
import HeaderIcon from "./HeaderIcon";

const Header = () => {
  const [expanded, setExpanded] = useState();
  const navEl = useRef();

  useEffect(() => {
    expanded
      ? navEl.current.classList.add("expanded")
      : navEl.current.classList.remove("expanded");
  }, [expanded]);

  return (
    <header className="Header">
      <Link to="/" className="Header-Name">
        <HeaderIcon />
        FoxiDev.io
      </Link>

      <div
        className="Header-NavToggle"
        onClick={() => setExpanded((curr) => !curr)}
      >
        {expanded ? <CloseIcon /> : <NavToggleIcon />}
      </div>

      <nav ref={navEl} className="Header-Nav">
        <NavLink exact activeClassName="active" to="/">
          Home
        </NavLink>

        <NavLink exact activeClassName="active" to="/about">
          About
        </NavLink>

        <NavLink exact activeClassName="active" to="/experiments">
          Experiments
        </NavLink>

        <NavLink
          exact
          activeClassName="active"
          to="/contact"
          className="Header-Nav-Cta link-button slide-gradient"
        >
          <ButtonIcon />
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
