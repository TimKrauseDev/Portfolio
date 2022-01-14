import React from "react";
import TsParticles from "./TsParticles";

const Landing = () => {
  return (
    <div id="landing" className="landing">
      <TsParticles />
      <div className="content">
        <h2>
          Hi, I'm Tim. <br /> Nice to meet you!
        </h2>
        <h1>Front-end Developer</h1>
        <a href="#portfolio">
          <h2>View Portfolio</h2>
        </a>
      </div>
    </div>
  );
};

export default Landing;
