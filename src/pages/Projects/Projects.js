import React, { Component } from 'react';

import ProjectList from '../../components/ProjectList/ProjectList';

import './Projects.css';

class Projects extends Component {
    render() {
        return(
            <div className="projects">
                <h1>Projects</h1>
                <div>
                    <ProjectList />
                </div>
            </div>
        );
    }
}

export default Projects;