import React, { useState } from "react";
import "../components/css/Header.css";
import { Link } from "react-router-dom";
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

      <div id="mobileScreenBtns">
        {!nav ? (
          <MdMenu size={50} onClick={() => setNav(true)} />
        ) : (
          <MdOutlineClose size={50} onClick={() => setNav(false)} />
        )}
      </div>

      {nav && (
        <nav id="mobileScreenNav">
          <ul className={`${nav ? "showNav" : "hideNav"}`}>
            {routes.map((r) => (
              <li key={r.name}>
                <Link to={r.link} className={`navLinks`}>
                  {r.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}

      <nav id="wideScreenNav">
        <ul>
          {routes.map((r) => (
            <li key={r.name}>
              <Link to={r.link} className="navLinks">
                {r.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
