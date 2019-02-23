import React, { Component } from 'react';

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
				<h1>{this.name}</h1>
				<p>{this.desc}</p>
			</div>
		);
	}
}

export default Project;