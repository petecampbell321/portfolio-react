import React, { Component } from 'react';
import ProjectList from '../../components/ProjectList/ProjectList';
import Landing from '../../components/Landing/Landing';

import './Home.css';

class Home extends Component {
	render() {
		return(
			<div>
				<Landing />
				<ProjectList />
			</div>
		);
	}
}

export default Home;