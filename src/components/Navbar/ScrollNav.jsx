import React from "react";
import { Link } from "react-scroll";

function ScrollNav({ closeMobileMenu }) {
  return (
    <>
      <li className="nav-item">
        <Link to="/" className="nav-links" onClick={closeMobileMenu}>
          HOME
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="about"
          spy={true}
          smooth={true}
          duration={50}
          className="nav-links"
          onClick={closeMobileMenu}
        >
          ABOUT
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="project"
          spy={true}
          smooth={true}
          duration={50}
          className="nav-links"
          onClick={closeMobileMenu}
        >
          PORTFOLIO
        </Link>
      </li>
      <li className="nav-item">
        <a
          href={process.env.PUBLIC_URL + "/files/resume_Songhee.docx"}
          download
          className="nav-links"
          onClick={closeMobileMenu}
        >
          <i className="fas fa-download"></i> RESUME
        </a>
      </li>
      <li className="nav-item">
        <a
          href="mailto:thdgml5537@gmail.com"
          className="nav-links"
          onClick={closeMobileMenu}
        >
          <i className="fas fa-paper-plane"></i> HIRE ME
        </a>
      </li>
    </>
  );
}

export default ScrollNav;
