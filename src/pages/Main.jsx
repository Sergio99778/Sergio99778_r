import React from 'react';

import Projects from '../Components/Projects';
import Languages from '../Components/Languages';
import Tools from '../Components/Tools';
import Skills from '../Components/Skills';

function Main() {
  return (
    <>
      <section className="main--introduction-section">
        <div className="introduction-container">
          <h3>Welcome to my website ❤️</h3>
          <ul className="introduction-list">
            <li>
              <span>✨</span> I'm an appasionate programmer who wants to make a better world by tipping the keys of a laptop and developing
              new software wich will become essential in the comunity.
            </li>
            <li>
              <span>✨</span> I love to make code and work with teams in challenging projects
            </li>
          </ul>
        </div>
      </section>
      <Projects></Projects>
      <div className="media">
        <Languages languages={['Python', 'C++', 'C', 'Web', 'Java', 'PHP']} />
        <Tools tools={['Github', 'Gnuplot', 'Codestream', 'MySQL', 'React', 'Redux']} />
      </div>
      <Skills />
    </>
  );
}

export default Main;
