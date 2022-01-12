import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub, faLinkedin, faTwitter} from '@fortawesome/free-brands-svg-icons';

function GithubIcon() {
    return <FontAwesomeIcon className="center" size="lg" icon={faGithub}/> 
}

function LinkedInIcon() {
    return <FontAwesomeIcon className="center" size="lg" icon={faLinkedin}/> 
}

function TwitterIcon() {
    return <FontAwesomeIcon className="center" size="lg" icon={faTwitter}/> 
}

export { GithubIcon, LinkedInIcon, TwitterIcon };