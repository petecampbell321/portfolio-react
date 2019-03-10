import React, { Component } from 'react';
import ProjectList from '../ProjectList/ProjectList'
import Landing from '../Landing/Landing';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Landing />
        <ProjectList />
      </div>
    );
  }
}

export default App;
