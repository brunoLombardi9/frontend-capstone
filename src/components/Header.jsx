import React, { useState } from "react";
import "./css/Header.css";
import { Link, NavLink } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import { MdOutlineClose } from "react-icons/md";

const routes = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Menu", link: "/menu" },
  { name: "Reservations", link: "/reservations" },
  { name: "Order Online", link: "/orderOnline" },
  { name: "Login", link: "/login" },
];

const Header = () => {
  const [nav, setNav] = useState(false);

  return (
    <header>
      <Link to="/">
        <img src={require("../assets/LogoColor.png")} alt="logo" id="navLogo" />
      </Link>

      <nav id="mobileScreenNav">
        <ul id={`${nav ? "showNav" : "hideNav"}`}>
          {routes.map((r) => (
            <li key={r.name}>
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
          {routes.map((r) => (
            <li key={r.name}>
              <NavLink to={r.link} className="wideScreenNavLinks">
                {r.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div id="mobileScreenBtns">
        {!nav ? (
          <MdMenu size={50} onClick={() => setNav(true)} />
        ) : (
          <MdOutlineClose size={50} onClick={() => setNav(false)} />
        )}
      </div>
    </header>
  );
};

export default Header;
