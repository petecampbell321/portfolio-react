import React, { Component } from 'react';
import Project from '../Project/Project';
//import projData from '../../util/projData';

import DataController from '../../util/DataController';

import './ProjectList.css';

class ProjectList extends Component {

	state = {
		projects: []
	}

	getProjects = () => {
		DataController.getProjects()
		.then(res => this.setState({ projects: res.projData }))
		.catch(err => console.log(err));
	}

	render() {

		this.getProjects();

		const list = this.state.projects.map(project => (
			<Project 
				key={project.id}
				name={project.name}
				type={project.type}
				desc={project.description}
			/>
		));

		return(
			<div className="list-container">
				{list}
			</div>
		)
	}
}

export default ProjectList;