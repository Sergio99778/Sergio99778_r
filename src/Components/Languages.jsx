import React from "react";

import "./Languages.css";

class Languages extends React.Component {
  render() {
    let res = /\+/g;
    return (
      <section className="main--language-section">
        <div className="language-section">
          <h3>Languages</h3>
          <ul className="languages-list">
            {this.props.languages.map((language) => {
              return (
                <li key={this.props.languages.indexOf(language)}>
                  <p>{language}</p>
                  <span
                    className={
                      res.test(language)
                        ? `${language.replace(/\+/g, "plus")}-logo`
                        : `${language}-logo`
                    }
                  ></span>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    );
  }
}

export default Languages;
