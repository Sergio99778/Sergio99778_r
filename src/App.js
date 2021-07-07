import Header from "./Components/Header";
import Projects from "./Components/Projects";
import Languages from "./Components/Languages";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header
        titles={["Projects", "Objectives", "About me"]}
        data='[ "Creating software.", "Creating the future.", "I Love to code.", "I Love to Develop." ]'
      />
      <main>
        <section className="main--introduction-section">
          <div className="introduction-container">
            <h3>Welcome to my website ❤️</h3>
            <ul className="introduction-list">
              <li>
                <span>✨</span> I'm an appasionate programmer who wants to make
                a better world by tipping the keys of a laptop and developing
                new software wich will become essential in the comunity.
              </li>
              <li>
                <span>✨</span> I love to make code and work with teams in
                challenging projects
              </li>
            </ul>
          </div>
        </section>
        <Projects></Projects>
        <div className="media">
          <Languages languages={["Python", "C++", "C", "Web", "Java", "PHP"]} />
        </div>
      </main>
    </div>
  );
}

export default App;
