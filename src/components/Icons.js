import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons';

function GithubIcon() {
    return <FontAwesomeIcon className="center" size="lg" icon={faGithub}/> 
}

function LinkedInIcon() {
    return <FontAwesomeIcon className="center" size="lg" icon={faLinkedin}/> 
}

function InstagramIcon() {
    return <FontAwesomeIcon className="center" size="lg" icon={faInstagram}/> 
}


export { GithubIcon, LinkedInIcon, InstagramIcon };