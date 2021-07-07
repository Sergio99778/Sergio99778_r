import React from "react";

import "./Skills.css";

class Skills extends React.Component {
  render() {
    return (
      <section class="main--skills-section">
        <div class="skills-section">
          <h3>Skills</h3>
          <ul class="skills-list">
            {this.props.skills.map((skill) => {
              return (
                <li>
                  <p>{skill}</p>
                  <img
                    src={`../img/${skill.toLowerCase().replace(/ /g, "_")}`}
                    alt=""
                    class={`skills-list__icon ${skill
                      .toLowerCase()
                      .replace(/ /g, "_")}`}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    );
  }
}

export default Skills;
