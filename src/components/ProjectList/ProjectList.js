import React, { Component } from 'react';
import { isMobileDevice, 
	isTabletDevice,
	isLaptopDevice,
	isBiggerThanLaptop } from 'responsive-react';
import Project from '../Project/Project';
import ProjectMobile from '../ProjectMobile/PorjectMobile';
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

		let list;
		
		if(isLaptopDevice() || isBiggerThanLaptop()) {
			list = this.state.projects.map(project => (
				<Project 
					key={project.id}
					name={project.name}
					type={project.type}
					desc={project.description}
				/>
			));
		}
		else if (isMobileDevice() || isTabletDevice()) {
			list = this.state.projects.map(project => (
				<ProjectMobile 
					key={project.id}
					name={project.name}
					type={project.type}
					desc={project.description}
				/>
			));
		}

		return(
			<div className="list-container">
				{list}
			</div>
		)
	}
}

export default ProjectList;