import Header from './Components/Header';
import Footer from './Components/Footer';
import Main from './pages/Main';
import NotFound from './pages/NotFound';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header
          titles={['Projects', 'Objectives', 'About me']}
          data='[ "Creating software.", "Creating the future.", "I Love to code.", "I Love to Develop." ]'
        />
        <main>
          <Switch>
            <Route exact path="/" component={Main} />
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
