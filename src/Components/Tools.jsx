import React from "react";

import "./Tools.css";

class Tools extends React.Component {
  render() {
    return (
      <section className="main--tools-section">
        <div className="tools-section">
          <h3>Tools</h3>
          <ul className="tools-list">
            {this.props.tools.map((tool) => {
              return (
                <li key={this.props.tools.indexOf(tool)}>
                  <p>{tool}</p>
                  <span className={`logo ${tool.toLowerCase()}-logo`}></span>
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
