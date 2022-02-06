import React from "react";

import imgHollyKane from "../images/professional_projects/hollykane.JPG";
import imgland_home from "../images/professional_projects/land_home.PNG";
import imgVeeker from "../images/professional_projects/veeker_home.PNG";
import imgFCStudio from "../images/professional_projects/fcstudio_home.PNG";
import imgDLDesign from "../images/professional_projects/dldesign_home.PNG";
import imgZirbel from "../images/professional_projects/zirbel_home.PNG";

const renderContrubutions = (list) =>
  list.map((item, idx) => {
    return <li key={idx}>{item}</li>;
  });

const Portfolio = () => {
  const featuredProfessionals = [
    {
      name: "The Veeker Collective",
      link: "https://www.theveekarcollective.com/",
      img: imgVeeker,
      description: [
        "Custom cursor as text hover effects on Collective Mission page and Individual gallery pages.",
      ],
    },
    {
      name: "DL Design Studio",
      link: "https://www.dldesignstudioltd.com/",
      img: imgDLDesign,
      description: [
        "Website's build out and current design",
        "All website animation, hover & transiiton effects",
        "Custom Services page",
      ],
    },
    {
      name: "LANDology",
      link: "http://www.landology.net/",
      img: imgland_home,
      description: [
        "Homepage gallery animation and title",
        "Custom Navigation dropdown with images / pronounciations",
      ],
    },
    {
      name: "Zirbel Architects",
      link: "https://www.zirbelarchitect.com/",
      img: imgZirbel,
      description: ["Custom Navigation"],
    },

    {
      name: "Holly Kane",
      link: "https://www.hollykane.com/",
      img: imgHollyKane,
      description: [
        "Website's build out and current design",
        "Custom navigation hover effect",
        "Custom button hover effect",
      ],
    },

    {
      name: "FC Studio",
      link: "https://www.fcstudioinc.com/",
      img: imgFCStudio,
      description: ["Website's current design"],
    },
  ];

  return (
    <div id="professional" className="portfolio">
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
      <div id="portfolio-professional" className="portfolio-professional">
        <div className="section-title">
          <h2>Featured</h2>
          <h1>Professional Work</h1>
          <p className="description">
            Out of the 100+ websites that my team and I have brought to life for
            our clients, below are a few select favorites. As the sole front-end
            developer on my team, I have worked with the designers to bring to
            live ideas and concepts past the limit of Squarespace's CMS.
          </p>
        </div>
        <div className="portfolio-gallery">
          <div className="gallery-item">
            <a
              href={featuredProfessionals[0].link}
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                className="portfolio-image"
                alt={featuredProfessionals[0].name}
                src={featuredProfessionals[0].img}
              />
              <h2>{featuredProfessionals[0].name}</h2>
            </a>
            <h3>Key Contributions</h3>
            <ul>{renderContrubutions(featuredProfessionals[0].description)}</ul>
          </div>
          <div className="gallery-item">
            <a
              href={featuredProfessionals[1].link}
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                className="portfolio-image"
                alt={featuredProfessionals[1].name}
                src={featuredProfessionals[1].img}
              />
              <h2>{featuredProfessionals[1].name}</h2>
            </a>
            <h3>Key Contributions</h3>
            <ul>{renderContrubutions(featuredProfessionals[1].description)}</ul>
          </div>
          <div className="gallery-item">
            <a
              href={featuredProfessionals[2].link}
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                className="portfolio-image"
                alt={featuredProfessionals[2].name}
                src={featuredProfessionals[2].img}
              />
              <h2>{featuredProfessionals[2].name}</h2>
            </a>
            <h3>Key Contributions</h3>
            <ul>{renderContrubutions(featuredProfessionals[2].description)}</ul>
          </div>
          <div className="gallery-item">
            <a
              href={featuredProfessionals[3].link}
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                className="portfolio-image"
                alt={featuredProfessionals[3].name}
                src={featuredProfessionals[3].img}
              />
              <h2>{featuredProfessionals[3].name}</h2>
            </a>
            <h3>Key Contributions</h3>
            <ul>{renderContrubutions(featuredProfessionals[3].description)}</ul>
          </div>
          <div className="gallery-item">
            <a
              href={featuredProfessionals[4].link}
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                className="portfolio-image"
                alt={featuredProfessionals[4].name}
                src={featuredProfessionals[4].img}
              />
              <h2>{featuredProfessionals[4].name}</h2>
            </a>
            <h3>Key Contributions</h3>
            <ul>{renderContrubutions(featuredProfessionals[4].description)}</ul>
          </div>
          <div className="gallery-item">
            <a
              href={featuredProfessionals[5].link}
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                className="portfolio-image"
                alt={featuredProfessionals[5].name}
                src={featuredProfessionals[5].img}
              />
              <h2>{featuredProfessionals[5].name}</h2>
            </a>
            <h3>Key Contributions</h3>
            <ul>{renderContrubutions(featuredProfessionals[5].description)}</ul>
          </div>
        </div>
        <div className="portfolio-readmore">
          <p>See More</p>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
