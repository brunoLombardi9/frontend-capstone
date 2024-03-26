import React, { useState } from "react";
import "./css/Header.css";
import { Link, NavLink } from "react-router-dom";
import { MdMenu, MdOutlineClose } from "react-icons/md";
import { routes } from "../App";

const Header = () => {
  const [nav, setNav] = useState(false);

  return (
    <header>
      <Link to="/" onClick={() => setNav(false)}>
        <img src={require("../assets/LogoColor.png")} alt="logo" id="navLogo" />
      </Link>

      <nav id="mobileScreenNav">
        <ul id={nav ? "showNav" : "hideNav"}>
          {routes.map((r, index) => (
            <li key={index}>
              <NavLink
                to={r.link}
                className="mobileScreenNavLinks"
                onClick={() => setNav(false)}
              >
                {r.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <nav id="wideScreenNav">
        <ul>
          {routes.map((r, index) => (
            <li key={index}>
              <NavLink to={r.link} className="wideScreenNavLinks">
                {r.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div id="mobileScreenBtns" onClick={() => setNav(!nav)}>
        {!nav ? <MdMenu size={50} /> : <MdOutlineClose size={50} />}
      </div>
    </header>
  );
};

export default Header;
