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
            Full Stack Developer/ IOS Developer since 2021. Earned a certificate
            in Full Stack Development from Georgia institute of Technology.
            Built two IOS Applications which are 'Interactive Reward Display
            (IRD)' and 'Price Check' system. Worked on developing POS (Point Of
            Sale) system and 'Inventory' application. Begin Master's of Science
            in Analytics at Georgia institute of Technology in 2022.
          </p>
          <p>
            Looking to bring my passion and technical skills to the company to
            grow and become a valuable asset.
          </p>
          <p>Check my skills and projects below!</p>
        </div>

        <div className="skill-strength row">
          <div className="skill-set col-sm-12 col-md-12 col-lg-6">
            <h1>Skill Set</h1>
            <div className="icons row">
              <i class="devicon-swift-plain-wordmark about-devicon col"></i>
              <i class="devicon-objectivec-plain about-devicon col"></i>
              <i class="devicon-php-plain about-devicon col"></i>
              <i className="devicon-jquery-plain-wordmark about-devicon col"></i>
              <i className="devicon-javascript-plain about-devicon col"></i>
              <i className="devicon-html5-plain-wordmark about-devicon col"></i>
              <i className="devicon-react-plain-wordmark about-devicon col"></i>
              <i className="devicon-nodejs-plain-wordmark about-devicon col"></i>
              <i className="devicon-python-plain-wordmark about-devicon col"></i>
              <i className="devicon-django-plain-wordmark about-devicon col"></i>
              <i className="devicon-mysql-plain-wordmark about-devicon col"></i>
              <i className="devicon-mongodb-plain-wordmark about-devicon col"></i>
            </div>
          </div>

          <div className="workplace-strength col-sm-12 col-md-12 col-lg-6">
            <h1>Workplace Strength</h1>
            <div className="row">
              <div>Great Teamwork Skill</div>
              <div>Collaboration</div>
              <div>Fast Learner</div>
              <div>Problem-Solving</div>
              <div>Excellent Time Management</div>
              <div>Mind Control Under Pressure</div>
            </div>
          </div>
        </div>
        <div className="about-scrolldown">
          <ScrollDown to="project" />
        </div>
      </div>
    </>
  );
}

export default About;
