import React from "react";
import ProjectsTable from "../Components/Projects";

const data = [
  {
    name: "Clandestino",
    url: "https://sergio99778.github.io/clandestino/",
    img: "https://i.ibb.co/qxXfw6y/clandestino.jpg",
    desc: "Clandestino project",
  },
  {
    name: "Places",
    url: "https://loving-kowalevski-c361d3.netlify.app/",
    img: "https://i.ibb.co/jMxDvtb/places.jpg",
    desc: "Places project",
  },
  {
    name: "Appointment",
    url: "https://citas-gamma.vercel.app/",
    img: "https://i.ibb.co/9hSkpWw/prj1.png",
    desc: "Appointment manager",
  },
  {
    name: "Budget",
    url: "https://budget-xi.vercel.app/",
    img: "https://i.ibb.co/r6hFP2z/Screenshot-at-2022-03-17-02-27-17-1.png",
    desc: "Budget manager",
  },
  {
    name: "Insurance quote",
    url: "https://insurance-quote-seven.vercel.app/",
    img: "https://i.ibb.co/W5xP6Qk/Screenshot-at-2022-03-17-02-27-49-1.png",
    desc: "Insurance quote",
  },
  {
    name: "Cotize your Crypto",
    url: "https://crypto-app-vert.vercel.app/",
    img: "https://i.ibb.co/mhpdMsj/Screenshot-at-2022-03-17-02-28-24-1.png",
    desc: "Cryto cotizer",
  },
  {
    name: "Landing Page",
    url: "https://github.com/Sergio99778/responsive-freeCodeCamp",
    img: "https://i.ibb.co/86175JY/landing-page.jpg",
    desc: "Landing project",
  },
  {
    name: "Tribute",
    url: "https://sergio99778.github.io/responsive-freeCodeCamp/Build-a-Tribute-Page/index.html",
    img: "https://i.ibb.co/WzYYQNH/tribute.jpg",
    desc: "Tribute project",
  },
];

function Projects() {
  return (
    <>
      <section className="main--introduction-section">
        <div className="introduction-container">
          <h3>Welcome to my Projects ❤️</h3>
          {/* <ul className="introduction-list">
            <li>
              <span>✨</span> Happy to see u here :D
            </li>
          </ul> */}
        </div>
      </section>
      <ProjectsTable data={data} />
    </>
  );
}

export default Projects;
