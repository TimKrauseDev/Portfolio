import React, { useState } from "react";

import logo from "../images/tk_logo.png";

const Header = () => {
  const [navActive, setNameActive] = useState(false);

  return (
    <header className="header">
      <div className="header-top">
        <a href="/#landing" onClick={() => setNameActive(false)}>
          <img src={logo} alt="logo" className="logo" />
        </a>
      </div>
      <div className="header-middle">
        <div className="hamburger-wrapper">
          <button
            onClick={() => setNameActive(!navActive)}
            className={`hamburger hamburger--spin ${
              navActive === true ? "is-active" : ""
            }`}
            type="button"
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </div>
        <nav className={`header-nav ${navActive === true ? "is-active" : ""}`}>
          <a
            href="#portfolio-personal"
            onClick={() => setNameActive(!navActive)}
            className={`${navActive ? "is-active" : ""}`}
          >
            Personal <br /> Work
          </a>
          <a
            href="#portfolio-professional"
            onClick={() => setNameActive(!navActive)}
            className={`${navActive ? "is-active" : ""}`}
          >
            Professional <br /> Work
          </a>
          <a
            href="#about-title"
            onClick={() => setNameActive(!navActive)}
            className={`${navActive ? "is-active" : ""}`}
          >
            About
          </a>
          <a
            href="#contact-title"
            onClick={() => setNameActive(!navActive)}
            className={`${navActive ? "is-active" : ""}`}
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
