// Import Statements
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ScrollToTop from '../ScrollToTop/ScrollToTop';

// Pages
import Home from '../../pages/Home/Home';
import Admin from '../../pages/Admin/Admin';
import Projects from '../../pages/Projects/Projects';
import About from '../../pages/About/About';

// CSS
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <ScrollToTop>
          <div>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/admin" component={Admin} />
              <Route path="/projects" component={Projects} />
              <Route path="/about" component={About} />
            </Switch>
          </div>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
