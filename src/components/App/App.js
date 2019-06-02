import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '../../pages/Home/Home';
import Admin from '../../pages/Admin/Admin';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/admin" component={Admin} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
