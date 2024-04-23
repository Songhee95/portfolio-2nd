import React, { useState } from "react";
import "./Projects_data2.css";
import projectLists from "./projectLists_data2";
import ToTop from "../ScrollToComponent/ToTop";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function Projects() {
  const [list, setList] = useState(projectLists);

  const chunkSize = 3;
  const chunks = [];
  for (let i = 0; i < list.length; i += chunkSize) {
    chunks.push(list.slice(i, i + chunkSize));
  }

  // Mapping over the chunks to create rows of portfolio previews

  const displayList = chunks.map((chunk, index) => (
    <div className="portfolio__row" key={list.key}>
      {chunk.map((item) => (
        <div className="project_container">
          <div className="project__individual__container" key={item.key}>
            <div className="image-container">
              <a href={process.env.PUBLIC_URL + item.page}>
                <img src={process.env.PUBLIC_URL + item.image} alt="" />
              </a>
            </div>
            <div className="description-box">
              <h5>{item.title}</h5>
              <p>{item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  ));

  return (
    <div className="project-container container" id="project">
      <h1 className="project-title">Projects</h1>
      {/* <video src={process.env.PUBLIC_URL + "/videos/1.mp4"} autoPlay loop muted /> */}
      <div className="project-row">{displayList}</div>
      <div className="project-scrollup">
        <ToTop to="home" />
      </div>
    </div>
  );
}

export default Projects;
