import React, { Component } from 'react';

// CSS
import './About.css'

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';

// Images
import ProfileImg from '../../img/profile.JPG';

class About extends Component {
    render() {

        const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec tempor ex. Suspendisse at lacinia mi. Praesent tempor nulla vel tristique posuere. Donec urna velit, mattis vel ante eget, volutpat mollis odio. Proin eget mattis eros, non sollicitudin sapien. Nulla ultricies sagittis est, ac venenatis lorem rhoncus sed. Cras tincidunt eleifend est, vel porttitor tellus dignissim sed. Curabitur sodales lobortis nisi, eget fermentum turpis vehicula sed. Etiam interdum consequat nisi. Aenean placerat ornare nisi nec efficitur. Suspendisse faucibus libero sem, cursus finibus urna ultrices luctus."

        return (
            <div className="about">
                <div className="about-sidebar">
                    <img src={ProfileImg} alt="profile"/>
                    <h1>Pete Campbell</h1>
                    <h2>Freelance developer</h2>
                    <div className="about-socials">
                        <a target="_blank" rel="noopener noreferrer" href="mailto:contact@petecampbell.me.uk"><FontAwesomeIcon icon={faEnvelopeSquare} className="icon" size="sm" /></a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/petecamp.design/"><FontAwesomeIcon icon={faFacebookSquare} className="icon" size="sm" /></a>
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/petecampbell321"><FontAwesomeIcon icon={faGithubSquare} className="icon" size="sm" /></a>
                    </div>
                </div>
                <div className="about-content">
                    <div className="about-profile">
                        <h1>Profile</h1>
                        <h2>Personal Info:</h2>
                        <p>{text}</p>
                    </div>
                    <div className="about-qualifications">
                        <h1>Qualifications</h1>
                        <p>{text}</p>
                    </div>
                    <div className="about-tech">
                        <h1>Experience</h1>
                        <h2>Technologies</h2>
                        <p>{text}</p>

                        <h2>Companies</h2>
                        <p>{text}</p>
                    </div>
                    <div className="about-projects">
                        {/* link to projects */}
                    </div>
                </div>
            </div>
        );
    }
}

export default About;