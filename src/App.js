//Dependences
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//Components
import Header from './Components/Header';
import Footer from './Components/Footer';

//Pages
import Main from './pages/Main';
import NotFound from './pages/NotFound';
import Projects from './pages/Projects';
import Objectives from './pages/Objectives';
import AboutMe from './pages/AboutMe';
import Blog from './pages/Blog';

import './App.css';

const titles = [
  { name: 'Projects', to: '/projects' },
  { name: 'Objectives', to: '/objetives' },
  { name: 'About me', to: '/about_me' },
  { name: 'Blog', to: '/blog' },
];

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header titles={titles} data='[ "Creating software.", "Creating the future.", "I Love to code.", "I Love to Develop." ]' />
        <main>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/objetives" component={Objectives} />
            <Route exact path="/about_me" component={AboutMe} />
            <Route exact path="/blog" component={Blog} />
            <Route component={NotFound} />
          </Switch>
        </main>
        <Footer
          redes={[
            {
              name: 'facebook',
              href: 'https://www.facebook.com/sergio1729/',
            },
            {
              name: 'twitter',
              href: 'https://twitter.com/SergioDeLucio2',
            },
            {
              name: 'linkedin',
              href: 'https://www.linkedin.com/in/sergio-de-lucio/',
            },
            {
              name: 'github',
              href: 'https://github.com/Sergio99778/',
            },
          ]}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
