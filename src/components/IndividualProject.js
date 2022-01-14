import React from "react";

const IndividualProject = ({ featuredPersonalProject, inverse }) => {
  const { name, link, img, description, stack = [] } = featuredPersonalProject;

  const stackList = stack.map((item, index) => (
    <li key={index} className="stack-list-item">
      <h2>{item}</h2>
    </li>
  ));

  return (
    <div id="individual-project-wrapper">
      <div className="Index-page-content">
        <div className="left-container">
          <div className="img-wrapper">
            <a href={link} rel="noopener noreferrer" target="_blank">
              <img className="portfolio-image" alt={name} src={img} />
            </a>
          </div>
        </div>
        <div className="right-container" style={{ order: inverse ? -1 : 0 }}>
          <div className="project-content">
            <h2 className="project-title">{name}</h2>
            <p className="project-description">{description}</p>
            <ul className="stack-list">{stackList}</ul>
          </div>
          <div className="links-wrapper">
            <a href={link} rel="noopener noreferrer" target="_blank">
              <h2>View Live</h2>
            </a>
            <a href="/">
              <h2>Github</h2>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndividualProject;
