import React from "react";
import HeroSection from "../components/HeroSection";
import Promotions from "../components/Promotions";
import Testimonials from "../components/Testimonials";
import RestaurantInfo from "../components/RestaurantInfo";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Promotions />
      <Testimonials />
      <RestaurantInfo />
    </>
  );
};

export default Home;
