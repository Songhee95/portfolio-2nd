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
            With a foundation as an iOS application developer and full stack web
            developer, I bring a unique blend of technical expertise and
            analytical abilities to the table. Transitioning into a data analyst
            role while pursuing a master’s degree in computer science with a
            focus on analytics has equipped me with the skills to transform
            complex data into actionable insights. I am passionate about
            leveraging my diverse background to drive innovative solutions that
            enhance user experiences and optimize business outcomes. My journey
            reflects a commitment to continuous learning and a desire to make a
            meaningful impact in the data-driven landscape.
          </p>
        </div>

        <div className="about-scrolldown">
          <ScrollDown to="project" />
        </div>
      </div>
    </>
  );
}

export default About;
