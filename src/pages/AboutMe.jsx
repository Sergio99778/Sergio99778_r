import React from "react";
import "./styles/AboutMe.css";

function AboutMe() {
  return (
    <>
      <section className="main--introduction-section">
        <div className="introduction-container">
          <h3>Welcome to my About Me ❤️</h3>
          <h2> &gt; What I am like?</h2>
          <ul className="introduction-list">
            <li>
              <span> ✨ </span> Mexican forever 🇲🇽
            </li>
            <li>
              <span> ✨ </span> Open to opinions 👀
            </li>
            <li>
              <span>✨</span> Learning 24/7 ⌛
            </li>
            <li>
              <span>✨</span> Love nightcore music 🎶
            </li>
          </ul>
          <h2> &gt; Formation</h2>
          <ul className="introduction-list">
            <li>
              <span>✨</span> Mathematics at UnADM 📖
            </li>
            <li>
              <span>✨</span> Two years learning at Platzi 💚
            </li>
            <li>
              <span>✨</span> FreeCodeCamp Frontend developer 👍
            </li>
            <li>
              <span>✨</span> Student at Udemy 💡
            </li>
          </ul>
          <h2> &gt; Hobbies</h2>
          <ul className="introduction-list">
            <li>
              <span>✨</span> Play with my cat 🐈
            </li>
            <li>
              <span>✨</span> Learn different things 🧠
            </li>
            <li>
              <span>✨</span> Networking 🫂
            </li>
            <li>
              <span>✨</span> Videogames 🎮
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default AboutMe;
