import React from 'react';

import './Projects.css';
import defaultImage from '../img/404.svg';

class Projects extends React.Component {
  render() {
    return (
      <section className="projects" id="projects">
        <h3 className="projects-title">Projects</h3>
        <div className="main--projects-section">
          {this.props.data.map((item, i) => {
            return (
              <div key={i} className="project">
                <h3 className="project-title">⭐ {item.name} ⭐</h3>
                <a href={item.url} rel="noreferrer" target="_blank">
                  <img className="project--image" src={item.img ? item.img : defaultImage} alt={item.desc} />
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
