import React, { Component } from 'react';

// CSS
import '../universal.css';
import './Landing.css';

// FontAwesomeIcons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

class Landing extends Component {
    render() {
        return(
            <div className="landing-container">
                <div className="landing-content">
                    <svg 
                        id="logo" 
                        data-name="Layer 1" 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 982 500"
                    >
                        <defs>
                            <style>
                                { `.cls-1{fill:#53c9b4;}` }
                                { `.cls-2{fill:#c95a36;}` }
                            </style>
                        </defs>
                        <title>
                            Artboard 1
                        </title>
                        <path 
                            id="Ellipse_Green" 
                            data-name="Ellipse Green" 
                            className="cls-1" 
                            d="M254.6,9.08C385.16,9.08,491,114.9,491,245.44S385.16,481.8,254.6,481.8,18.2,376,18.2,245.44,124,9.08,254.6,9.08Z"
                        />
                        <circle 
                            id="Ellipse_Orange_" 
                            data-name="Ellipse Orange " 
                            className="cls-2" 
                            cx="727.41" 
                            cy="245.45" 
                            r="236.41"
                        />
                    </svg>
                    <p>Hi! I'm <span className="heavy-font">Pete Campbell</span>!</p>
                    <p><span className="green-font heavy-font">Designer</span> & <span className="orange-font heavy-font">Developer</span></p>
                    <p className="small-font">(Of this site and some others)</p>
                    <a href="#choice"><FontAwesomeIcon icon={faArrowDown} id="arrow" /></a>
                </div>			
            </div>
        );
    }
}

export default Landing;