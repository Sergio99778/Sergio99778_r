import React from 'react';
import Projects from '../Components/Projects';

import prove from '../img/404.svg';

const data = [
  {
    name: 'Clandestino',
    url: 'https://github.com/Sergio99778/clandestino',
    img: prove,
    desc: 'Clandestino project',
  },
  {
    name: 'Clandestino',
    url: 'https://github.com/Sergio99778/clandestino',
    img: prove,
    desc: 'Clandestino project',
  },
  {
    name: 'Clandestino',
    url: 'https://github.com/Sergio99778/clandestino',
    img: prove,
    desc: 'Clandestino project',
  },
  {
    name: 'Clandestino',
    url: 'https://github.com/Sergio99778/clandestino',
    desc: 'Clandestino project',
  },
];

function Blog() {
  return (
    <>
      <section className="main--introduction-section">
        <div className="introduction-container">
          <h3>Welcome to my blog ❤️</h3>
          <ul className="introduction-list">
            <li>
              <span>✨</span> Happy to see u here :D
            </li>
          </ul>
        </div>
      </section>
      <Projects data={data} />
    </>
  );
}

export default Blog;
