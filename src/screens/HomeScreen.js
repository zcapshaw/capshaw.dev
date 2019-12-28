import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faBars } from '@fortawesome/free-solid-svg-icons'
import background from '../assets/images/background.jpg';
import IconLink from '../components/IconLink';

class HomeScreen extends Component {

  render() {
    return (
        <div    className="flex bg-cover bg-center bg-fixed h-screen w-screen relative" 
                style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(${background})`}}>
            <div className="top-0 right-0 fixed mt-6 mr-6">
                <FontAwesomeIcon className="center" icon={faBars} color="#BBBBBB" size="lg"/>
            </div>  
            <div className="m-auto">
            <h1 className="md:text-5xl text-white font-bold antialiased">
                Hello, my name is Zach.
            </h1>
            <h2 className="text-white font-test antialiased">
                I design and build software.
            </h2>
            <div className="my-8">
                <button className="btn hover:bg-gray-700 focus:outline-none font-bold antialiased">
                    <a href="#Projects" className="no-underline text-white">View my work</a>
                </button>   
                <button className="btn hover:bg-gray-700 focus:outline-none ml-6 font-bold antialiased">
                    <a href="#Contact" className="no-underline text-white">Contact me</a>
                </button>   
            </div>
            </div> 
            <div className="flex w-screen justify-center mb-6 bottom-0 absolute">
                <FontAwesomeIcon className="center" icon={faChevronDown} color="#BBBBBB" size="lg"/>
            </div>
            <div className="sm:mr-8 absolute right-0 bottom-0 ">
                <ul>
                    <IconLink url="https://github.com/zcapshaw" icon="Github"/>
                    <IconLink url="https://www.linkedin.com/in/zcapshaw/" icon="LinkedIn"/>
                    <IconLink url="https://www.instagram.com/zacapshaw/" icon="Instagram"/>
                </ul>
            </div>    
        </div>
    );
  }

}

export default HomeScreen;

