import React, { cloneElement } from "react";
import "./css/Footer.css";
import { MdLocationOn } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { routes } from "../App";

const contactList = [
  { icon: <MdLocationOn />, text: "1234 Elm Street, Springfield, IL 62701" },
  { icon: <MdLocalPhone />, text: "(217) 555-1234" },
  { icon: <MdEmail />, text: "restaurant@littlelemon.com" }
];

const connectIcons = [
  { icon: <FaFacebook />, link: "https://www.facebook.com/" },
  { icon: <FaXTwitter />, link: "https://twitter.com/" },
  { icon: <FaInstagram />, link: "https://www.instagram.com/" },
  { icon: <FaYoutube />, link: "https://www.youtube.com/" },
];

const Footer = () => {
  return (
    <footer>
      <div id="footerLogo">
        <img src={require("../assets/LogoNoColor.png")} alt="logo" />
      </div>

      <div id="sitemap">
        <h2>SITEMAP</h2>
        <ul>
          {routes.map((r, index) => (
            <li key={index}>
              <Link to={r.link}>{r.name}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div id="contact">
        <h2>CONTACT US</h2>
        <ul>
          {contactList.map((c, index) => (
            <li key={index}>
              {cloneElement(c.icon, { size: 20 })}
              <p>{c.text}</p>
            </li>
          ))}
        </ul>
      </div>

      <div id="socialMedia">
        <h2>CONNECT WITH US</h2>
        <ul>
          {connectIcons.map((c, index) => (
            <li key={index}>
              <a href={c.link} target="_blank" rel="noreferrer">
                {cloneElement(c.icon, { size: 20 })}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
