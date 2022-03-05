import React from "react";
import TsParticles from "./TsParticles";

import Pdf from "../images/TimKrauseResume.pdf";

const Landing = () => {
  return (
    <div id="landing" className="landing">
      <TsParticles />
      <div className="content">
        <h2>
          Hi, I'm Tim. <br /> Nice to meet you!
        </h2>
        <h1>Full Stack Developer</h1>
        <div className="wrapper">
          <a href="#portfolio">
            <h2>Portfolio</h2>
          </a>
          <a href={Pdf} target="_blank" rel="noopener noreferrer">
            <h2>Resume</h2>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Landing;
