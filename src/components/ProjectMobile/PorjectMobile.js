import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import './ProjectMobile.css';

class ProjectMobile extends Component {
	constructor(props) {
		super(props);
		this.id = props.id;
		this.name = props.name;
		this.type = props.type;
        this.desc = props.desc;

        this.state = {isToggleOn: true};

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
          isToggleOn: !prevState.isToggleOn
        }));
      }

	render() {
		return(
			<div className="project-container">
				<div className="project-header">
					<h2>{this.name}</h2>
                    <div className="vert-align">
                        <FontAwesomeIcon icon={faPlus} className="plusIcon" size="sm" onClick={this.handleClick} />
                    </div>
					<hr className="clearfix" id="seperator"/>
				</div>
				<div className={`project-desc ${this.state.isToggleOn ? 'hidden' : ''}`}>
					<p>{this.desc}</p>
				</div>
			</div>
		);
	}
}

export default ProjectMobile;