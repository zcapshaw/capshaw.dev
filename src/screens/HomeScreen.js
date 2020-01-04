import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import background from '../assets/images/background.jpg';
import IconLink from '../components/IconLink';
import SideNav from '../components/SideNav';

class HomeScreen extends Component {

  render() {
    return (
        <div    id="Home"
                className="flex bg-cover bg-center lg:bg-fixed h-screen w-screen relative" 
                style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(${background})`}}>
            <div>
                <SideNav />
            </div>
            <div className="m-auto">
            <h1 className="md:text-5xl text-white font-bold antialiased">
                Hello, my name is Zach.
            </h1>
            <h2 className="text-white font-test antialiased">
                I design and build software.
            </h2>
            <div className="flex flex-col md:flex-row my-8">
                <button className="btn py-4 md:px-6 hover:bg-gray-700 focus:outline-none font-extrabold antialiased">
                    <a href="#Projects" className="no-underline text-white">View my work</a>
                </button>   
                <button className="btn p-4 hover:bg-gray-700 focus:outline-none md:ml-6 mt-4 md:mt-0 font-extrabold antialiased">
                    <a href="#Contact" className="no-underline text-white">Contact me</a>
                </button>   
            </div>
            </div> 
            <div className="flex w-screen justify-center mb-6 bottom-0 absolute">
                <a href="#AboutMe" className="icon">
                    <FontAwesomeIcon className="center" icon={faChevronDown} size="lg"/>
                </a>
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

