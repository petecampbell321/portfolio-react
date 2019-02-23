import React, { Component } from 'react';
import Project from '../Project/Project';
import projData from '../../util/projData';

class ProjectList extends Component {
	render() {
		const list = projData.map(projectData => (
			<Project 
				key={projectData.id}
				name={projectData.name}
				type={projectData.type}
				desc={projectData.desc}
			/>	
		));

		return(
			<div>
				<h1>My Projects</h1>
				{list}
			</div>
		)
	}
}

export default ProjectList;