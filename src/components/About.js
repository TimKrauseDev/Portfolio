import React from "react";

import imgHTML from "../images/technologies/html.png";
import imgCSS from "../images/technologies/css.png";
import imgJS from "../images/technologies/js.png";
import imgJQuery from "../images/technologies/jquery.png";
import imgBootstrap from "../images/technologies/bootstrap.png";
import imgSass from "../images/technologies/sass.png";
import imgReact from "../images/technologies/react.png";
import imgRedux from "../images/technologies/redux.png";
import imgSquarespace from "../images/technologies/squarespace.png";
import imgStackOverflow from "../images/technologies/stackoverflow.png";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="custom-shape">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <div id="about-title" className="section-title">
        <h2>About Me</h2>
        <h1>Tim Krause</h1>
      </div>
      <div className="about-description">
        <p>
          I’m a Front-End Developer with a passion for solving problems and turn
          ideas into reality. Well-organized person, resourceful, independent
          employee with a high attention to detail and dedication to drive
          innovation. Fan of paddle boarding, hiking and binging TV shows.
          Interested in creating full stack applications and working on
          ambitious projects with positive people.
        </p>
      </div>
      <div className="about-gallery">
        <img className="about-image" alt="imgHTML" src={imgHTML} />
        <img className="about-image" alt="imgCSS" src={imgCSS} />
        <img className="about-image" alt="imgJS" src={imgJS} />
        <img className="about-image" alt="imgJQuery" src={imgJQuery} />
        <img className="about-image" alt="imgBootstrap" src={imgBootstrap} />
        <img className="about-image" alt="imgSass" src={imgSass} />
        <img className="about-image" alt="imgReact" src={imgReact} />
        <img className="about-image" alt="imgRedux" src={imgRedux} />
        <img
          className="about-image"
          alt="imgSquarespace"
          src={imgSquarespace}
        />
        <img
          className="about-image"
          alt="imgStackOverflow"
          src={imgStackOverflow}
        />
      </div>
    </div>
  );
};

export default About;
