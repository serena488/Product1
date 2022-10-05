import React from "react";
import { Intro } from "../components/Intro";
import { Banner } from "../components/Banner";
import { Services } from "../components/Services";
import { Plan } from "../components/Plan";
import { Testimon } from "../components/Testimon";
import { Specialize } from "../components/Specialize"

const Home = () => {
  return (
    <div className="Home">
      <Intro />
      <Banner />
      <Services />
      <Plan />
      <Specialize />
      <Testimon />


    </div>
  );
};

export default Home;