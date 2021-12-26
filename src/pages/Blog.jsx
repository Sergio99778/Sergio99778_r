import React from 'react';
import Projects from '../Components/Projects';

//Images
import prove from '../img/404.svg';
import clandestino from '../img/projects/clandestino.jpg';
import landing from '../img/projects/landing-page.jpg';
import places from '../img/projects/places.jpg';
import tribute from '../img/projects/tribute.jpg';

const data = [
  {
    name: 'Clandestino',
    url: 'https://github.com/Sergio99778/clandestino',
    img: clandestino,
    desc: 'Clandestino project',
  },
  {
    name: 'Landing Page',
    url: 'https://github.com/Sergio99778/places-react',
    img: landing,
    desc: 'Landing project',
  },
  {
    name: 'Places',
    url: 'https://github.com/Sergio99778/places-react',
    img: places,
    desc: 'Places project',
  },
  {
    name: 'Tribute',
    url: 'https://sergio99778.github.io/responsive-freeCodeCamp/Build-a-Tribute-Page/index.html',
    img: tribute,
    desc: 'Tribute project',
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
