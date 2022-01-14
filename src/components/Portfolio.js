import React from "react";

import IndividualProject from "./IndividualProject";

import imgMeteorDup from "../images/personal_projects/meteor_home.PNG";
import imgSortingAlgo from "../images/personal_projects/sortingAlgo_home.PNG";
import imgCovidApp from "../images/personal_projects/covidapp.png";

const Portfolio = () => {
  const featuredPersonalProjects = [
    {
      name: "Meteor Landing Page",
      link: "https://meteor-dup.herokuapp.com/",
      github: "https://github.com/",
      img: imgMeteorDup,
      description:
        "In this front-end project, Meteor's landing page was fully duplicated with using React and SCSS. A few styling and typo bugs were also found during this project, which were then reported to Meteor.",
      stack: ["React", "SCSS"],
    },
    {
      name: "Sorting Visualizer",
      link: "https://sorting-visualize.herokuapp.com/",
      github: "https://github.com/",
      img: imgSortingAlgo,
      description:
        "This sorting visualizer is a front-end application that allows users to visualize the following sorting algorithms: Bubble, Insertion, Merge, Quick and Selection. You have the ability to sort the array of bars automatically or step-by-step.",
      stack: ["React", "React Router", "Bootstrap", "SCSS"],
    },
    {
      name: "COVID-19 Tracker",
      link: "https://krause-covid-tracker.herokuapp.com/",
      github: "https://github.com/",
      img: imgCovidApp,
      description:
        "This application allows users to track COVID-19 cases at both a global and country level. You can see which countries are doing things right and which are struggling through the pandemic as you monitor the amount of active, recovered and death cases along with the percentage of population who have vaccinated.",
      stack: ["React", "Material UI", "SCSS"],
    },
  ];

  return (
    <div id="portfolio" className="portfolio">
      {/* PORTFOLIO PERSONAL */}
      <div id="portfolio-personal" className="portfolio-personal">
        <div className="section-title">
          <h2>Featured</h2>
          <h1>Personal Work</h1>
          <p>
            <em>
              All projects use Heroku.
              <br />
              Please open all projects at once so their dynos can wake up and
              you only have to wait once!
            </em>
          </p>
        </div>

        <IndividualProject
          featuredPersonalProject={featuredPersonalProjects[0]}
        />
        <div className="spacer"></div>
        <IndividualProject
          featuredPersonalProject={featuredPersonalProjects[1]}
          inverse
        />
        <div className="spacer"></div>
        <IndividualProject
          featuredPersonalProject={featuredPersonalProjects[2]}
        />
      </div>
    </div>
  );
};

export default Portfolio;
