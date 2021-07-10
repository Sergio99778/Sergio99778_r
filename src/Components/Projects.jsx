import React from "react";

import "./Projects.css";

import clandestino from "../img/projects/clandestino.jpg";
import landing from "../img/projects/landing-page.jpg";
import places from "../img/projects/places.jpg";
import tribute from "../img/projects/tribute.jpg";

class Projects extends React.Component {
  state = {
    data: [
      {
        id: "1",
        name: "Clandestino",
        url: "https://github.com/Sergio99778/clandestino",
        img: clandestino,
        desc: "Clandestino project",
      },
      {
        id: "2",
        name: "Places react",
        url: "https://github.com/Sergio99778/places-react",
        img: places,
        desc: "Places project",
      },
      {
        id: "3",
        name: "Landing page",
        url: "https://github.com/Sergio99778/responsive-freeCodeCamp",
        img: landing,
        desc: "Landing page project",
      },
      {
        id: "4",
        name: "Tribute page",
        url: "https://sergio99778.github.io/responsive-freeCodeCamp/Build-a-Tribute-Page/index.html",
        img: tribute,
        desc: "Tribute project",
      },
    ],
  };
  render() {
    return (
      <section className="projects" id="projects">
        <h3 className="projects-title">Projects</h3>
        <div className="main--projects-section">
          {this.state.data.map((project) => {
            return (
              <div key={project.id} className="project">
                <h3 className="project-title">⭐ {project.name} ⭐</h3>
                <a href={project.url} rel="noreferrer" target="_blank">
                  <img
                    className="project--image"
                    src={project.img}
                    alt={project.desc}
                  />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  }
}

export default Projects;
