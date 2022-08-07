import React from "react";
import LogoBanner from "../components/Banner/LogoBanner";
import SubscribeBanner from "../components/Banner/SubscribeBanner";
import Footer from "../components/Footer/Footer";
import { Hero } from "../components/Hero/Hero";
import HomeSection from "../components/Section/HomeSection";
import HomeSection2 from "../components/Section/HomeSection2";

const Home = () => {
  return (
    <>
      <Hero />
      <LogoBanner />
      <HomeSection />
      <HomeSection2 />
      <SubscribeBanner />
      <Footer />
    </>
  );
};

export default Home;
