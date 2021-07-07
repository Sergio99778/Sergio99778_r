import React from "react";

import "./Tools.css";

class Tools extends React.Component {
  render() {
    return (
      <section class="main--tools-section">
        <div class="tools-section">
          <h3>Tools</h3>
          <ul class="tools-list">
            {this.props.tools.map((tool) => {
              return (
                <li>
                  <p>{tool}</p>
                  <span className={`${tool.toLowerCase()}-logo`}></span>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    );
  }
}

export default Tools;
