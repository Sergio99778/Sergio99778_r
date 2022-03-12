import React from "react";

import "./Skills.css";

import team from "../img/Skills/work_in_team.png";
import creativity from "../img/Skills/creativity.png";
import enthusiasm from "../img/Skills/enthusiasm.png";
import resilience from "../img/Skills/resilience.png";
import english_b2 from "../img/Skills/english_b2.png";
import analytical from "../img/Skills/analytical.png";
import assertiveness from "../img/Skills/assertiveness.png";
import comunication from "../img/Skills/comunication.png";
import french_a2 from "../img/Skills/french_a2.png";

class Skills extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        {
          name: "Work in team",
          img: team,
        },
        {
          name: "Creativity",
          img: creativity,
        },
        {
          name: "Enthusiasm",
          img: enthusiasm,
        },
        {
          name: "Resilience",
          img: resilience,
        },
        {
          name: "English B2",
          img: english_b2,
        },
        {
          name: "Analytical",
          img: analytical,
        },
        {
          name: "Assertiveness",
          img: assertiveness,
        },
        {
          name: "Communication",
          img: comunication,
        },
        {
          name: "French A2",
          img: french_a2,
        },
      ],
    };
  }
  render() {
    return (
      <section className="main--skills-section">
        <div className="skills-section">
          <h3>Skills</h3>
          <ul className="skills-list">
            {this.state.data.map((skill) => {
              return (
                <li key={this.state.data.indexOf(skill)}>
                  <p>{skill.name}</p>
                  <img
                    src={skill.img}
                    alt={skill.name}
                    className={`skills-list__icon ${skill.name
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
