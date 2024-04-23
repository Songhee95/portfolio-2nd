import React from "react";
import "./About.css";
import ScrollDown from "../ScrollToComponent/ScrollDown";

function About() {
  return (
    <>
      <div className="about-container container" id="about">
        <div className="about-me">
          <h1>About me</h1>
          <p>
            Former app developer turned system analyst, I thrive on decoding the
            intricacies of technology. From designing seamless user experiences
            to optimizing system efficiencies, I've traversed the realms of
            software with finesse and innovation. Now, poised at the
            intersection of data and discovery, I'm venturing into the realm of
            data science. With a passion for uncovering insights and a
            relentless drive for impact, I'm ready to harness the power of data
            to drive transformative outcomes and shape the future of innovation.
          </p>
          <p>
            Looking to bring my passion and technical skills to the company to
            grow and become a valuable asset.
          </p>
          <p>Check my skills and projects below!</p>
        </div>

        <div className="about-scrolldown">
          <ScrollDown to="project" />
        </div>
      </div>
    </>
  );
}

export default About;
