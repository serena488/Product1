import React from "react";
import { Intro } from "../components/Intro";
import { Banner } from "../components/Banner";
import { Services } from "../components/Services";
import { Plan } from "../components/Plan";

const Home = () => {
  return (
    <div className="Home">
      <Intro />
      <Banner />
      <Services />
      <Plan />
    </div>
  );
};

export default Home;