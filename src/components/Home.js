import React from "react";

import Landing from "./Landing";
import Portfolio from "./Portfolio";
import About from "./About";
import Contact from "./Contact";
import Professional from "./Professional";

const Home = () => {
  return (
    <div className="home">
      <Landing />
      <Portfolio />
      <Professional />
      <About />
      <Contact />
    </div>
  );
};

export default Home;
