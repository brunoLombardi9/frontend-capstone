import React from "react";
import "../components/css/Header.css";
import { Link } from "react-router-dom";

const routes = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Menu", link: "/menu" },
  { name: "Reservations", link: "/reservations" },
  { name: "Order Online", link: "/orderOnline" },
  { name: "Login", link: "/login" },
];

const Header = () => {
  return (
    <header>
      <Link to="/">
        <img src={require("../assets/LogoColor.png")} alt="logo" id="navLogo" />
      </Link>
      <nav>
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
