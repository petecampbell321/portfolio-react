import React, { Component } from 'react';
// import ProjectList from '../../components/ProjectList/ProjectList';
import Landing from '../../components/Landing/Landing';
import Choice from '../../components/Choice/Choice';

import './Home.css';

class Home extends Component {
	render() {
		return(
			<div>
				<Landing />
				<Choice />
				{/* <ProjectList /> */}
			</div>
		);
	}
}

export default Home;