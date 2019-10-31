import React, { Component } from 'react';
import Project from '../Project/Project';
import projData from '../../util/projData';

import './AdminProjectList.css';

class AdminProjectList extends Component {
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
			<div className="container">
                <h2>Project Preview</h2>
				<div className="list-container">
					{list}
				</div>
			</div>
		)
	}
}

export default AdminProjectList;