import React, { Component } from 'react';

// CSS
import "../universal.css";
import './Choice.css';

// FontAwesomeIcons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';

class Choice extends Component {
    render() {
        return(
            <div className="choice-container" id="choice">
                <h1 className="section-title">
                    Choose Your Path...
                </h1>
                <div className="option-container">
                    <div className="option" id="projects">
                        <FontAwesomeIcon icon={faFolderOpen} size="3x" />
                        <h3>
                            Projects
                        </h3>
                    </div>
                    <div className="option" id="about">
                        <FontAwesomeIcon icon={faUser} size="3x" />
                        <h3>
                            About Me
                        </h3>
                    </div>
                </div>
            </div>
        );
    }
}

export default Choice;