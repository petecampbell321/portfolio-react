import React, { Component } from 'react';

import './Project.css';

class Project extends Component {
	constructor(props) {
		super(props);
		this.id = props.id;
		this.name = props.name;
		this.type = props.type;
		this.desc= props.desc;
	}

	render() {
		return(
			<div className="project-container">
				<div className="project-header">
					<h1>{this.name}</h1>
					<hr />
				</div>
				<div className="project-desc">
					<p>{this.desc}</p>
				</div>
			</div>
		);
	}
}

export default Project;