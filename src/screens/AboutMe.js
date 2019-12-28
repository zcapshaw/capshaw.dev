import React, { Component } from 'react';
import headshot from '../assets/images/headshot.jpg';

class AboutMe extends Component {

  render() {
    return (
        <section className="about">
          <div className="bg-gray-800 pb-32 lg:pb-64"> 
            <div className="pt-32 pb-8">
                <h2 id="AboutMe" className="font-bold text-center uppercase text-white tracking-wide antialiased lg:text-4xl">About Me</h2> 
            </div>
            <div className="lg:flex max-w-md lg:max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-16">
                <div className="flex m-auto py-8 lg:mx-8 justify-center w-40 lg:w-1/3 overflow-hidden">
                    <img src={headshot} alt="Zach" className="rounded-full"/>
                </div>
                <div className="m-auto px-8 pb-8 lg:py-8 max-w-3xl">
                    <p className="text-xl text-gray-800">I'm an experienced Product Manager, UX Designer, and Developer. I've worked in Product Devlopment at multiple startups and as a consultant helping clients design, build, and launch apps. </p>
                </div>
            </div>
          </div>
          <div className="flex flex-col max-w-md lg:max-w-5xl lg:flex-row mx-auto bg-white -mt-32 lg:-mt-64 mb-16 shadow-lg rounded-lg overflow-hidden">
                <div className="m-auto p-12 pb-12 pt-8 max-w-3xl">
                    <h1 className="text-blue-800 font-bold text-center">Designer</h1>
                    <p className="text-xl text-gray-800 py-4">I'm an experienced Product Manager, UX Designer, and Developer. I've worked in Product Devlopment at multiple startups and as a consultant helping clients design, build, and launch apps. </p>
                    <p className="text-xl text-gray-800 py-4">I'm an experienced Product Manager, UX Designer, and Developer. I've worked in Product Devlopment at multiple startups and as a consultant helping clients design, build, and launch apps. </p>
                    <p className="text-xl text-gray-800 py-4">I'm an experienced Product Manager, UX Designer, and Developer. I've worked in Product Devlopment at multiple startups and as a consultant helping clients design, build, and launch apps. </p>
                </div>
                <div className="m-auto p-12 pb-12 pt-8 max-w-3xl">
                    <h1 className="text-blue-800 font-bold text-center">Developer</h1>
                    <p className="text-xl text-gray-800 py-4">I'm an experienced Product Manager, UX Designer, and Developer. I've worked in Product Devlopment at multiple startups and as a consultant helping clients design, build, and launch apps. </p>
                    <p className="text-xl text-gray-800 py-4">I'm an experienced Product Manager, UX Designer, and Developer. I've worked in Product Devlopment at multiple startups and as a consultant helping clients design, build, and launch apps. </p>
                    <p className="text-xl text-gray-800 py-4">I'm an experienced Product Manager, UX Designer, and Developer. I've worked in Product Devlopment at multiple startups and as a consultant helping clients design, build, and launch apps. </p>                </div>
                <div className="m-auto p-12 pb-12 pt-8 max-w-3xl">
                    <h1 className="text-blue-800 font-bold text-center">Product Manager</h1>
                    <p className="text-xl text-gray-800 py-4">I'm an experienced Product Manager, UX Designer, and Developer. I've worked in Product Devlopment at multiple startups and as a consultant helping clients design, build, and launch apps. </p>
                    <p className="text-xl text-gray-800 py-4">I'm an experienced Product Manager, UX Designer, and Developer. I've worked in Product Devlopment at multiple startups and as a consultant helping clients design, build, and launch apps. </p>
                    <p className="text-xl text-gray-800 py-4">I'm an experienced Product Manager, UX Designer, and Developer. I've worked in Product Devlopment at multiple startups and as a consultant helping clients design, build, and launch apps. </p>                </div>
            </div>
        </section>
    );
  }

}

export default AboutMe;

