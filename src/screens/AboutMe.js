import React, { Component } from 'react';
import headshot from '../assets/images/headshot.jpg';
import { Code, Pencil, Rocket } from '../components/Icons/';

class AboutMe extends Component {

  render() {
    return (
        <section className="about">
          <div className="bg-gray-800 pb-32 lg:pb-64"> 
            <div className="pt-32 pb-8">
                <h2 id="AboutMe" className="font-bold text-center uppercase text-white tracking-wide antialiased lg:text-4xl">About Me</h2> 
            </div>
            <div className="lg:flex max-w-xs md:max-w-md lg:max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-16">
                <div className="m-auto py-8 lg:mx-8 w-1/2 overflow-hidden">
                    <img src={headshot} alt="Zach" className="rounded-full"/>
                </div>
                <div className="m-auto px-8 pb-8 lg:py-8 max-w-3xl">
                    <p className="text-xl text-gray-800 pb-4">I'm an experienced product manager, UX designer, and software developer. </p>
                    <p className="text-xl text-gray-800">I've worked in product leadership at multiple startups and as a consultant helping clients design, build, and launch apps. </p>

                </div>
            </div>
          </div>
            <div className="flex flex-col max-w-xs bg-white -mt-32 mb-16 mx-auto p-4 shadow-lg rounded-lg md:max-w-md lg:max-w-5xl lg:flex-row lg:-mt-64 lg: lg:p-8">
                <div className="lg:mx-4 lg:w-1/3">
                    <Rocket height="5rem" width="5rem" className="mx-auto mt-16 mb-8"/>
                    <h1 className="text-gray-800 font-bold text-center">Product Manager</h1>
                    <p className="text-xl text-gray-800 text-center py-4">I love bringing products from concept to launch.</p>
                    <h2 className="text-center pt-2 subheader">Skills</h2>
                    <ul className="text-lg text-gray-600 text-center">
                        <li className="py-1">Building Product teams</li>
                        <li className="py-1">Product vision & strategy</li>
                        <li className="py-1">Scrum & agile coaching</li>
                        <li className="py-1">Experience in B2B, B2C, Machine Learning, AI, and Web3</li>
                    </ul>
                </div>
                <div className="lg:mx-4 lg:w-1/3">
                    <Pencil height="5rem" width="5rem" className="mx-auto mt-16 mb-8"/>
                    <h1 className="text-gray-800 font-bold text-center">Designer</h1>
                    <p className="text-xl text-gray-800 text-center py-4">Software interfaces should be clean, simple, and intuitive.</p>
                    <h2 className="text-center pt-2 subheader">Skills</h2>
                    <ul className="text-lg text-gray-600 text-center">
                        <li className="py-1">UI / UX design</li>
                        <li className="py-1">Responive web & native mobile</li>
                        <li className="py-1">Usability testing</li>
                        <li className="py-1">Wireframes & prototyping</li>

                    </ul>
                </div>
                <div className="lg:mx-4 lg:w-1/3">
                    <Code height="5rem" width="5rem" className="mx-auto mt-16 mb-8"/>
                    <h1 className="text-gray-800 font-bold text-center">Developer</h1>
                    <p className="text-xl text-gray-800 text-center py-4">I build full-stack web apps and native mobile apps.</p>
                    <h2 className="text-center pt-2 subheader">Skills</h2>
                    <ul className="text-lg text-gray-600 text-center">
                        <li className="py-1">HTML/CSS/JS</li>
                        <li className="py-1">TypeScript</li>
                        <li className="py-1">React & React Native</li>
                        <li className="py-1">Flutter</li>
                        <li className="py-1">Node.js & Express</li>
                    </ul>
                </div>
            </div>
        </section>
    );
  }

}

export default AboutMe;

