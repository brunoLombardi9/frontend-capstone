import React from "react";
import "./css/HeroSection.css";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section id="heroSection">
      <div id="textArea">
        <h1>Little Lemon</h1>
        <p id="city">California</p>
        <p id="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          pariatur adipisci quo voluptate. Fugit, soluta.
        </p>
        <Link to="/reservations" id="heroBtn">
          Reserve a table
        </Link>
      </div>
      <div id="heroImage">
        <img src={require("../assets/restauranfood.jpg")} alt="food picture" />
      </div>
    </section>
  );
};

export default HeroSection;
