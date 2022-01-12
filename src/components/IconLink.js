import React, { Component } from 'react';
import { GithubIcon, LinkedInIcon, TwitterIcon } from './Icons';


class IconLink extends Component {

    renderIcon(props) {
        switch (this.props.icon) {
            case 'Github':
                return <GithubIcon />
            case 'LinkedIn': 
                return <LinkedInIcon />
            case 'Twitter':
                return <TwitterIcon />
            default:
                return null;
        }
    }


    render() {
        return (
            <li className="my-6 mx-4 inline-block">
                <a href={this.props.url} target="_blank" rel='noreferrer noopener' className='icon'>
                    {this.renderIcon()}
                </a>
            </li>
        );
    }
}

export default IconLink;