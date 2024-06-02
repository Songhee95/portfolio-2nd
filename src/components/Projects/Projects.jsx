import React, { useState } from "react";
import "./Projects.css";
import projectLists from "./projectLists";
import ToTop from "../ScrollToComponent/ToTop";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function Projects() {
  const [list, setList] = useState(projectLists);

  const chunkSize = 2;
  const chunks = [];
  for (let i = 0; i < list.length; i += chunkSize) {
    chunks.push(list.slice(i, i + chunkSize));
  }

  const displayList = chunks.map((chunk, index) => (
    <div className="portfolio__row" key={list.key}>
      {chunk.map((item) => (
        <div className="project__individual__container" key={item.key}>
          <div className="project__individual__wrap">
            <Carousel
              className="project-image"
              autoPlay
              interval="5000"
              transitionTime="1000"
              infiniteLoop={true}
              showThumbs={false}
            >
              {item.image.map((img) => (
                <img
                  className="slide"
                  src={process.env.PUBLIC_URL + img}
                  alt={item.title}
                />
              ))}
            </Carousel>
            <div className="project__description__wrap">
              <h3 className="project__title">{item.title}</h3>
              <p className="project__description">{item.description}</p>
              <div className="project__description__icon__wrap">
                {item.icon.map((icon) => (
                  <i className={icon}></i>
                ))}
              </div>
              <div className="links">
                {item.github && (
                  <div>
                    <a href={item.github} className="card-link">
                      Github
                    </a>
                  </div>
                )}
                {item.deploy && (
                  <div>
                    <a href={item.deploy} className="card-link">
                      WepPage
                    </a>
                  </div>
                )}
                {item.appStore && (
                  <div>
                    <a href={item.appStore} className="card-link">
                      AppStore
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  ));

  return (
    <div className="project-container container" id="project">
      {/* <video src={process.env.PUBLIC_URL + "/videos/1.mp4"} autoPlay loop muted /> */}
      <h5>Development projects</h5>
      <div className="project-row">{displayList}</div>
      <div className="project-scrollup">
        <ToTop to="home" />
      </div>
    </div>
  );
}

export default Projects;
