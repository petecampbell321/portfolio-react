import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

// CSS
import "../universal.css";
import './Choice.css';

// FontAwesomeIcons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';

// Links
import App from '../App/App';

class Choice extends Component {
    render() {
        return(
            <Router>
                <Switch>
                    <Route path="/projects" component={App} />
                    <Route path="/about" component={App} />

                    <div className="choice-container" id="choice">
                        <h2 className="section-title">
                            Choose Your Path...
                        </h2>
                        <div className="option-container">
                                <div className="option" id="projects">
                                    <Link to="/projects">
                                        <FontAwesomeIcon icon={faFolderOpen} size="3x" />
                                        <h3>
                                            Projects
                                        </h3>
                                    </Link>
                                </div>
                                <div className="option" id="about">
                                    <Link to="/about">
                                        <FontAwesomeIcon icon={faUser} size="3x" />
                                        <h3>
                                            About Me
                                        </h3>
                                    </Link>
                                </div>
                        </div>
                    </div>

                </Switch>
            </Router>
        );
    }
}

export default Choice;